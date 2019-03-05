import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PlaylistsLoggedUserService} from '../../service/playlists-logged-user/playlists-logged-user.service';
import {Playlist} from '../../model/Playlist';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';
import {YoutubeDescriptionsLoggedInService} from '../../service/descriptions/youtube-descriptions-logged-in.service';
import {GoogleAuthService} from 'ng-gapi';

import {ConfirmationService, MessageService} from 'primeng/api';


@Component({
  selector: 'app-playlists-logged-user',
  templateUrl: './playlists-logged-user.component.html',
  styleUrls: ['./playlists-logged-user.component.css']
})
export class PlaylistsLoggedUserComponent implements OnInit {

  responsePlaylists: Observable<any> ;
  isDescriptionsModalOpen = false;
  playlists: Playlist[];
  playlistDescriptionId: string;
  playlistTitle: string;
  playlistDescription: string;
  isUserAuthenticated: boolean;


  constructor(private playlistsLoggedUserService: PlaylistsLoggedUserService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.responsePlaylists = this.playlistsLoggedUserService.getPlaylists();
    this.responsePlaylists.subscribe((data: Playlist[]) => {
      this.playlists = data;
      console.log(this.playlists);
    }, error => {
        this.messageService.add({severity: 'error', summary: 'Playlist', detail: 'Les playlists n\'ont pas été chargées'});
      },
      () => {
        this.messageService.add({severity: 'success', summary: 'Playlist', detail: 'Les playlists ont été chargées avec succès' });
      });
  }

 public openDescriptionModal(playlistId: string, playlistTitle: string, playlistDescription: string) {
    this.isDescriptionsModalOpen = true;
    this.playlistDescriptionId = playlistId;
    this.playlistTitle = playlistTitle;
    this.playlistDescription = playlistDescription;

  }

  deletePlaylist(playlistId: string) {
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer cette playlist ?',
      accept: () => {
        this.playlistsLoggedUserService.deletePlaylist(playlistId);
      },
      reject: () => {},
    });
  }


  public closeDescriptionModal() {
    this.isDescriptionsModalOpen = false;
    this.playlistDescriptionId = null;
  }
}
