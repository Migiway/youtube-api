import { Component, OnInit } from '@angular/core';
import {GoogleApiOauthStorageService} from '../../service/storage/google-api-oauth-storage.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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

  constructor(private apiOauthStorageService: GoogleApiOauthStorageService, private deviceService: DeviceDetectorService) { }

  ngOnInit() {
    this.isUserAuthenticated = !!this.apiOauthStorageService.getAuthenticationDataWithKey('access_token');
    var isMobile = this.deviceService.isMobile();
    var isTablet = this.deviceService.isTablet();
    if( isTablet === true || isMobile === true){
      var menu = document.getElementById("menu");
      menu.classList.add("hide");
    }
  }

  public menuOpenClose() {
    var menu = document.getElementById("menu");
    if(menu.classList.contains('hide') === true){
      menu.classList.remove("hide");
    }
    else{
      menu.classList.add("hide");
    }
  }
  public onResize(event) {
    var width = event.target.innerWidth;
    var menu = document.getElementById("menu");
    if(width < 801){
      if( menu.classList.contains('hide') === false){
        menu.classList.add("hide");
      }
    }
    else{
      if( menu.classList.contains('hide') === true){
        menu.classList.remove("hide");
      }
    }
  }
}
