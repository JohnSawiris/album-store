import { Injectable } from '@angular/core';

// Import modules
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

// Using @Injectable makes this class available to our injector
@Injectable()

export class AlbumService {

  constructor() { }

// This returns the list of albums receive from ALBUMS
  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(albumId: number) {
    for(var i = 0; i < ALBUMS.length; i++) {
      if(ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
