import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayInfoComponent } from './display-info/display-info.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TendancesComponent } from './tendances/tendances.component';
import { MusiqueComponent } from './musique/musique.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SportContentComponent } from './sport-content/sport-content.component';
import {SportContentService} from '../service/sport/sport-content.service';
import {MusiqueContentService} from '../service/musique/musique-content.service';
import { ChannelComponent } from './channel/channel.component';
import {ChannelService} from '../service/channel/channel.service';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {SearchService} from '../service/search/search.service';
import {GetLogoComponent } from './get-logo/get-logo.component';
import {GetLogoService} from '../service/logo/get-logo.service';

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'get-logo', component: GetLogoComponent},
  {path: '', component: HomeComponent },
];

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
    SearchComponent,
    HomeComponent,
    GetLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      /*{enableTracing : true}*/
    )
  ],
  providers: [
    SportContentService,
    MusiqueContentService,
    ChannelService,
    SearchService,
    GetLogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
