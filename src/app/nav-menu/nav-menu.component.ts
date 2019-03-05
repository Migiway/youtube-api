import { Component, OnInit } from '@angular/core';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isUserAuthenticated: boolean;
  activeHome = false;
  activeSearch = false;
  activeGetLogo = false;
  activePlaylist = false;

  constructor(private apiOauthStorageService: GoogleApiOauthStorageService) { }

  ngOnInit() {
    this.isUserAuthenticated = !!this.apiOauthStorageService.getAuthenticationDataWithKey('access_token');
  }


}
