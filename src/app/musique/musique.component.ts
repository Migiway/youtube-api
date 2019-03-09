import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Video} from '../../model/Video';
import {MusiqueContentService} from '../../service/musique/musique-content.service';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css'],
  providers : [MusiqueContentService]
})
export class MusiqueComponent implements OnInit {

  responseVideos: Observable<any> ;
  musiqueVideo: Video[];
  isCommentModalOpen = false;
  videoCommentId: string;
  videoTitle: string;
  isUserAuthenticated: boolean;





  constructor( private musiqueContentService: MusiqueContentService, private youtubeAuthService: GoogleApiOauthStorageService) {
  }

  ngOnInit(): void {
    this.isUserAuthenticated = !!this.youtubeAuthService.getAuthenticationDataWithKey('access_token');

    this.responseVideos = this.musiqueContentService.getMusiqueVideos();
    this.responseVideos.subscribe(
      (data: Video[]) => {
        this.musiqueVideo = data;
      },
      error => {
        console.log(error);
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
