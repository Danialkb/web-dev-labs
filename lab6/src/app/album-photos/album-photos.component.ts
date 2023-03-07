import {Component, OnInit} from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    const id = Number(this.route.snapshot.paramMap.get('albumId'));
    this.albumService.getPhotos(id).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
