import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GetLogoService} from '../../service/logo/get-logo.service';
import {Channel} from '../../model/Channel';

@Component({
  selector: 'app-get-logo',
  templateUrl: './get-logo.component.html',
  styleUrls: ['./get-logo.component.css'],
  providers : [GetLogoService]
})
export class GetLogoComponent implements OnInit {

  responseChannel: Channel ;

  constructor(private getLogoService: GetLogoService) { }

  ngOnInit() {
  }

  public getChannel(searchChaine: string) {
    this.getLogoService.getChannel(searchChaine)
      .then(res => {
        this.responseChannel = {
          title: res.items[0].snippet.localized.title,
          imgUrl: res.items[0].snippet.thumbnails.high.url,
        };
      })
      .catch(err => console.log(err));
  }
}
