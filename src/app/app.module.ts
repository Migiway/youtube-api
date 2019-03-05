import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DisplayInfoComponent} from './display-info/display-info.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TendancesComponent} from './tendances/tendances.component';
import {MusiqueComponent} from './musique/musique.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {SportContentComponent} from './sport-content/sport-content.component';
import {SportContentService} from '../service/sport/sport-content.service';
import {MusiqueContentService} from '../service/musique/musique-content.service';
import {PlaylistComponent} from './playlist/playlist.component';
import {PlaylistContentService} from '../service/playlist/playlist-content.service';
import {ChannelComponent} from './channel/channel.component';
import {ChannelService} from '../service/channel/channel.service';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {SearchService} from '../service/search/search.service';
import {GetLogoComponent} from './get-logo/get-logo.component';
import {GetLogoService} from '../service/logo/get-logo.service';
import {AuthService} from '../service/auth.service';
import {GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig} from 'ng-gapi';
import {HttpRequestInterceptor} from '../service/httpRequestInterceptor';
import {InteractCommentModalComponent} from './interact-comment-modal/interact-comment-modal.component';
import {InteractRateModalComponent} from './interact-rate-modal/interact-rate-modal.component';
import {InteractDescriptionModalComponent} from './interact-description-modal/interact-description-modal.component';
import {PlaylistsLoggedUserComponent} from './playlists-logged-user/playlists-logged-user.component';
import {ConfirmationService, ConfirmDialogModule, MessageService} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'get-logo', component: GetLogoComponent},
  {path: 'get-logo', component: GetLogoComponent},
  {path: 'playlists', component: PlaylistsLoggedUserComponent},
  {path: '', component: HomeComponent },
];

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '488476890181-jf376d7v1k07s4atqa6922i9mi7bdben.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: [
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube.readonly',
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    DisplayInfoComponent,
    HeaderComponent,
    FooterComponent,
    TendancesComponent,
    MusiqueComponent,
    NavMenuComponent,
    SportContentComponent,
    ChannelComponent,
    PlaylistComponent,
    SearchComponent,
    HomeComponent,
    GetLogoComponent,
    InteractCommentModalComponent,
    InteractRateModalComponent,
    InteractDescriptionModalComponent,
    PlaylistsLoggedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ToastModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    RouterModule.forRoot(
      appRoutes,
      /*{enableTracing : true}*/
    ),
  ],
  providers: [
    SportContentService,
    MusiqueContentService,
    PlaylistContentService,
    ChannelService,
    SearchService,
    GetLogoService,
    AuthService,
    HttpRequestInterceptor,
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
