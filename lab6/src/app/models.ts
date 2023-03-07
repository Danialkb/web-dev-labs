

export interface Album {
  id: number,
  title: string
}
export const albumList: Album[] = [];
export let numOfAlbums = 100;
export function incrementNumOfAlbums() {
  numOfAlbums += 1;
}
export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string
}
