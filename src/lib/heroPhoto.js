// Auto-detect a hero photo from public/ at build time.
//
// Drop a single file at one of these paths to populate the hero photo slot:
//   public/photo.jpg | public/photo.jpeg | public/photo.png | public/photo.webp
//
// If no matching file exists, `getHeroPhoto()` returns null and the Hero
// component renders without the photo column (graceful no-op).

const modules = import.meta.glob(
  '/public/photo.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' },
)

export function getHeroPhoto() {
  const urls = Object.values(modules)
  return urls.length > 0 ? urls[0] : null
}
