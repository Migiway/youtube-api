import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { GoogleApiOauthStorageService } from './storage/google-api-oauth-storage.service';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})

export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(public authStorage: GoogleApiOauthStorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('youtube/v3/commentThreads')) {
      return next.handle(request);
    }
    this.handleAuthenticationEnded();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authStorage.getAuthenticationDataWithKey('access_token')}`
      }
    });
    return next.handle(request);
  }
  handleAuthenticationEnded() {
    const currentTime = new Date().getTime();
    const expiresTime = this.authStorage.getAuthenticationDataWithKey('expires_at');
    if (!expiresTime || currentTime >= expiresTime) {
      // TODO:: Trigger account is not logged in and can't add comment
      this.authStorage.resetAuthenticationData();
    }
  }
}
