import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../service/auth.service';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public videos = [];
  nextPage = '';
  prevPage = '';
  search = '';
  dangerousVideoUrl = '';
  userAuthData: object;
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private googleAuthStorage: GoogleApiOauthStorageService) { }

  ngOnInit() {
    this.userAuthData = this.googleAuthStorage.getAuthenticationData();
    this.authService.loadCallbackGoogleApi();
  }

  getVideos(varSearch: string) {
    varSearch = varSearch.replace('', '%7C');
    this.search = varSearch;
    this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + varSearch +
      '&type=video&videoCaption=any&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo&maxResults=6')
      .subscribe((response: Array<Object>) => {
        this.videos = response['items'];
        this.nextPage = response['nextPageToken'];
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element['id']['videoId'] +
            '?enablejsapi=1&origin=http://example.com&rel=1';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
      });
  }

  oauthSignIn() {
    this.authService.signIn(
      (res) => this.handleSignInSuccess(res),
      (err) => this.handleSignInAborted(err));
  }
  handleSignInSuccess(response) {
    const storageData = {
      'access_token': response.Zi.access_token,
      'expires_at': response.Zi.expires_at,
      'id_token': response.Zi.id_token,
      'full_name': response.w3.ig,
      'logoUrl': response.w3.Paa,
    };
    this.userAuthData = storageData;
    this.googleAuthStorage.setAuthenticationData(storageData);
  }
  handleSignInAborted(err) {
    console.log(err); // TODO:: Display error message to user
  }
  oauthSignOut() {
    this.authService.signOut();
    this.googleAuthStorage.resetAuthenticationData();
  }
}
