import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetLogoService {
  channelUrlApiBase = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=';

  constructor(private https: HttpClient) { }

  getChannel(searchChaine : string): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.https
        .get(this.channelUrlApiBase + searchChaine + '&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo')
        .subscribe(res => resolve(res), err => reject(err));
    })
  }
}
