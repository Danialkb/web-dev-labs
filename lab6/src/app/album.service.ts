import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Album, albumList, Photo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  URL: string = 'https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    if(id > 100) {
      const album =  albumList.find(a => a.id === id);
      if(album) {
        return of(album)
      }
    }
    return this.client.get<Album>(`${this.URL}/albums/${id}`);
  }

  getPhotos(id: number): Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.URL}/albums/${id}/photos`);
  }

  delAlbum(a: Album) {
    this.client.delete<Album>(`${this.URL}/albums`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.URL}/albums`, album);
  }

}
