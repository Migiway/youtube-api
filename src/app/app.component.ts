import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username: string;
  constructor() {
    this.username ='Jeff';
 }
 user = {
   'lastName' : 'data1',
   'firstName' : 'data1'
 };


  title = 'youtube-api';

}
