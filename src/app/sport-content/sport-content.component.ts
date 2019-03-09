import { Component, OnInit } from '@angular/core';
import {SportContentService} from '../../service/sport/sport-content.service';
import {Observable} from 'rxjs';
import {Video} from '../../model/Video';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';

@Component({
  selector: 'app-sport-content',
  templateUrl: './sport-content.component.html',
  styleUrls: ['./sport-content.component.css'],
  providers : [SportContentService]
})
export class SportContentComponent implements OnInit {


  responseVideos: Observable<any> ;
  sportVideo: Video[];
  isCommentModalOpen = false;
  videoCommentId: string;
  videoTitle: string;
  isUserAuthenticated: boolean;




  constructor( private sportContentService: SportContentService,  private youtubeAuthService: GoogleApiOauthStorageService) {

  }

  ngOnInit(): void {
    this.isUserAuthenticated = !!this.youtubeAuthService.getAuthenticationDataWithKey('access_token');
    this.responseVideos = this.sportContentService.getSportVideos();
    this.responseVideos.subscribe(
      (data: Video[]) => {
        this.sportVideo = data;
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
