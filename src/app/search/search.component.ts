import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import {YoutubeCommentsLoggedInService} from '../../service/comments/youtube-comments-logged-in.service';
import {GoogleAuthService} from 'ng-gapi';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchedVideos = [];
  nextPage = '';
  prevPage = '';
  search = '';
  dangerousVideoUrl = '';
  isCommentModalOpen = false;
  videoCommentId: string;
  videoTitle: string;
  isUserAuthenticated: boolean;

  constructor(
    private https: HttpClient,
    private domSanitizer: DomSanitizer,
    private youtubeAuthService: GoogleApiOauthStorageService) { }

  ngOnInit() {
    this.isUserAuthenticated = !!this.youtubeAuthService.getAuthenticationDataWithKey('access_token');
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
  public getVideos(searchInput: string) {
    searchInput = searchInput.replace('', '%7C');
    this.search = searchInput;
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      searchInput + '&type=video&videoCaption=any&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo&maxResults=8')
      .subscribe((response: Array<Object>) => {
        this.searchedVideos = response['items'];
        console.log(this.searchedVideos);
        this.nextPage = response['nextPageToken'];
        this.searchedVideos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element['id']['videoId'] +
            '?enablejsapi=1&origin=http://example.com&rel=1';
          element['urlSecure'] = this.domSanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
      });
  }

  getNextPageVideos(searchInput: string) {
    searchInput = searchInput.replace('', '%7C');
    this.search = searchInput;
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q='
      + this.search + '&type=video&videoCaption=any&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo&maxResults=8&pageToken=' + this.nextPage)
      .subscribe((response: Array<Object>) => {
        this.searchedVideos = response['items'];
        this.nextPage = response['nextPageToken'];
        this.prevPage = response['prevPageToken'];
        this.searchedVideos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element['id']['videoId'] + '?enablejsapi=1&origin=http://example.com';
          element['urlSecure'] = this.domSanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
      });
  }
  getPreviousPageVideos(searchInput: string) {
    searchInput = searchInput.replace('', '%7C');
    this.search = searchInput;
    this.https.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' +
      this.search + '&type=video&videoCaption=any&key=AIzaSyCyaZRe4xMnxqPdh9_fwuizP7bKTreyKNc&maxResults=8&pageToken=' + this.prevPage)
      .subscribe((response: Array<Object>) => {
        this.searchedVideos = response['items'];
        this.nextPage = response['nextPageToken'];
        this.prevPage = response['prevPageToken'];
        this.searchedVideos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element['id']['videoId'] + '?enablejsapi=1&origin=http://example.com';
          element['urlSecure'] = this.domSanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
      });
  }

}
