import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


//ActivatedRoute contains information about a route associated with a component loaded in an outlet. This is required for dynamic routing

// Params will help us collect parameters for use when routing

// Location helps normalize URLs when traveling between routes. meaning that different paths in app have same pattern.

// Import modules
import { Album } from '../album.model';
import { AlbumService } from './../album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {

  albumId: number;
  albumToDisplay: Album;

  constructor(
            private route: ActivatedRoute,
            private location: Location,
            private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

}
