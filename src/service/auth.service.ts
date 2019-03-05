import {GoogleApiService, GoogleAuthService} from 'ng-gapi';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // clientId     = '488476890181-jf376d7v1k07s4atqa6922i9mi7bdben.apps.googleusercontent.com';
  // clientSecret = 'qRgYxCwD9r8nOmfH2xKThpQq';

  private _refreshSuccesLogIn$ = new Subject<any>();
  private _refreshSuccesLogOut$ = new Subject<any>();
  onSuccessLoggedIn = this._refreshSuccesLogIn$.asObservable();
  onSuccessLoggedOut = this._refreshSuccesLogOut$.asObservable();
  constructor(private googleApiService: GoogleApiService,
              private googleAuth: GoogleAuthService) {
    googleApiService.onLoad().subscribe(() => {
      gapi.load('client:auth2', this.loadCallbackGoogleApi);
    });
  }
  loadCallbackGoogleApi() {}
  signIn(successCallback, errorCallback) {
    this.googleAuth.getAuth()
      .subscribe((auth) => {
        auth.signIn()
          .then(res => {
            this._refreshSuccesLogIn$.next(res);
            successCallback(res);
          })
          .catch(err => errorCallback(err));
    });
  }
  signOut(): void {
    this.googleAuth.getAuth().subscribe((auth) => {
      auth.signOut();
      this._refreshSuccesLogOut$.next();
    });
  }

}
