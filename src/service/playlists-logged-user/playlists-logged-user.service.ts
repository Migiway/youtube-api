import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsLoggedUserService {

  getOwnerPlaylistsUrl = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=9&mine=true' +
    '&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo';

  deletePlaylistUrl = 'https://www.googleapis.com/youtube/v3/playlists';
  constructor(private https: HttpClient,
              private messageService: MessageService) { }

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

  deletePlaylist(playlistId: string) {
    this.https.delete(this.deletePlaylistUrl, {
      params: {
        id: playlistId,
        key: 'AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo'
      }
    }).subscribe((value) => {
        this.messageService.add({severity: 'success', summary: 'Playlist', detail: 'Playlist supprimé avec succès'});
    },
      (err) => {
        this.messageService.add({severity: 'error', summary: 'Playlist', detail: 'La playlist n\'a pas été supprimé' });
      });
  }
}
