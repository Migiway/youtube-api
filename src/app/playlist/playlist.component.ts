import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PlaylistContentService} from '../../service/playlist/playlist-content.service';
import {Video} from '../../model/Video';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';
import {YoutubeCommentsLoggedInService} from '../../service/comments/youtube-comments-logged-in.service';
import {GoogleAuthService} from 'ng-gapi';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  providers : [PlaylistContentService]
})
export class PlaylistComponent implements OnInit {

  responseVideos: Observable<any> ;
  playlistVideo: Video[];
  isCommentModalOpen = false;
  isRateModalOpen = false;
  videoCommentId: string;
  videoTitle: string;
  videoRateId: string;
  isUserAuthenticated: boolean;


  constructor( private playlistContentService: PlaylistContentService, private youtubeAuthService: GoogleApiOauthStorageService) {
  }

  ngOnInit(): void {

    this.isUserAuthenticated = !!this.youtubeAuthService.getAuthenticationDataWithKey('access_token');
    this.responseVideos = this.playlistContentService.getPlaylistVideos();
    this.responseVideos.subscribe(
      (data: Video[]) => {
        this.playlistVideo = data;

        console.log('---------------------------');
        console.log(this.playlistVideo);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('on complete');
      }
    );
  }

   public openCommentModal(videoId: string, videoTitle: string) {
    this.isCommentModalOpen = true;
    this.videoCommentId = videoId;
    this.videoTitle = videoTitle;
  }

  public closeCommentModal() {
    this.isCommentModalOpen = false;
    this.videoCommentId = null;
  }
  
}
