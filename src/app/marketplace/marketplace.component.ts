import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Import modules
import { Album } from '../album.model';

//Import servcies
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {

  albums: Album[] = [];

  constructor(private router: Router, private albumService: AlbumService) { }

  // redefinig the component existing albums with service
  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };

}
