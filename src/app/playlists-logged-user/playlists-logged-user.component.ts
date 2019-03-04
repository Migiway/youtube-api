import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PlaylistsLoggedUserService} from '../../service/playlists-logged-user/playlists-logged-user.service';
import {Playlist} from '../../model/Playlist';
import {ConfirmationService} from 'primeng/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-playlists-logged-user',
  templateUrl: './playlists-logged-user.component.html',
  styleUrls: ['./playlists-logged-user.component.css']
})
export class PlaylistsLoggedUserComponent implements OnInit {

  responsePlaylists: Observable<any> ;
  playlists: Playlist[];

  constructor(private playlistsLoggedUserService: PlaylistsLoggedUserService,
              private confirmationService: ConfirmationService,
              private router: Router ) { }

  ngOnInit() {
    this.responsePlaylists = this.playlistsLoggedUserService.getPlaylists();
    this.responsePlaylists.subscribe((data: Playlist[]) => {
      this.playlists = data;
      console.log(this.playlists);
    }, error => {
        console.log(error);
      },
      () => {
        console.log('on complete');
      });
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


}
