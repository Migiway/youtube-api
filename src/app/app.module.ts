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
import { SportComponent } from './sport/sport.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SportContentComponent } from './sport-content/sport-content.component';
import {SportContentService} from '../service/sport/sport-content.service';
import {MusiqueContentService} from '../service/musique/musique-content.service';
import { ChannelComponent } from './channel/channel.component';
import {ChannelService} from '../service/channel/channel.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayInfoComponent,
    HeaderComponent,
    FooterComponent,
    TendancesComponent,
    MusiqueComponent,
    SportComponent,
    NavMenuComponent,
    SportContentComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SportContentService,
    MusiqueContentService,
    ChannelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
