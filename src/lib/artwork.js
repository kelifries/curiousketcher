// Auto-detects artwork from public/artwork/ at build time.
// Files are sorted alphabetically — use a numeric prefix (e.g. "01-foo.jpg") to control order.
// Filename (sans prefix + extension) is used as a default title.

// Vite resolves these at build time via import.meta.glob with the `as: 'url'` query.
// We pull from /public/artwork/ via a relative-from-src glob.
const modules = import.meta.glob('/public/artwork/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function prettifyFilename(path) {
  const base = path.split('/').pop() || ''
  const noExt = base.replace(/\.[^.]+$/, '')
  // Strip leading numeric prefix: "01-foo-bar" -> "foo-bar"
  const noPrefix = noExt.replace(/^\d+[-_\s]*/, '')
  // Replace separators with spaces and title-case
  return noPrefix
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export function loadArtwork() {
  const entries = Object.entries(modules)
  // Sort alphabetically by path (filename) so numeric prefixes drive order.
  entries.sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  return entries.map(([path, url]) => ({
    src: url,
    title: prettifyFilename(path),
    filename: path.split('/').pop(),
  }))
}
