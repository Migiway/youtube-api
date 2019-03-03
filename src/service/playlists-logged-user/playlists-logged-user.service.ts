import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsLoggedUserService {

  getOwnerPlaylistsUrl = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true' +
    '&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo';
  constructor(private https: HttpClient) { }

  getPlaylists() {
    return this.https
      .get(this.getOwnerPlaylistsUrl)
      .pipe(map((data: any) => {
        console.log(data);
        const items = data.items;
        console.log(items);
        const playlists = items.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.snippet.title,
            desc: playlist.snippet.description,
            img: playlist.snippet.thumbnails.medium.url
          };
        });

        console.log(playlists);
        return playlists;
      }));
  }
}
