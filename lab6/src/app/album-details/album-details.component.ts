import {Component, OnInit} from '@angular/core';
import {Album, albumList} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album: Album;

  edittedAlbum: Album;
  editing: boolean;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.edittedAlbum = {} as Album;
    this.editing = false;
  }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = Number(this.route.snapshot.paramMap.get('albumId'));
    this.albumService.getAlbum(id).subscribe((album) => {
      this.album = album;
    });
  }

  saveEdit() {
    for(let i of albumList) {
      if(i.id === this.album.id) {
        i.title = this.edittedAlbum.title;
      }
    }
    this.album.title = this.edittedAlbum.title;
    this.edittedAlbum = {} as Album;
    this.editing = false;
  }

}
