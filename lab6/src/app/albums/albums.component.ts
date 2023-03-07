import {Component, OnInit} from '@angular/core';
import {Album, albumList, incrementNumOfAlbums, numOfAlbums} from "../models";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  newAlbum: Album;
  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.newAlbum = {} as Album;
  }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums() {
    if(albumList.length != 0) {
      this.albums = albumList;
    } else {
      this.albumService.getAlbums().subscribe((albums) => {
        this.albums = albums;
        for(let i of albums) {
          albumList.push(i);
        }
      });
    }
  }

  delAlbum(alb: Album) {
    this.albumService.delAlbum(alb);
    const ind = albumList.findIndex(a => a.id === alb.id);
    this.albums.splice(ind, 1);

  }

  addAlbum() {
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      album.id = numOfAlbums + 1;
      incrementNumOfAlbums();
      this.albums.unshift(album);
      albumList.unshift(album);
      this.newAlbum = {} as Album;
    });
  }



}
