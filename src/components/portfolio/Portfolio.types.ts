export interface IVideoItem {
  id: string,
  getSrc: () => Promise<{ default: string }>,
  category: string,
  name: string,
  thumbnail: string,
  alt: string
}