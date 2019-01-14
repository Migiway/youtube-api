import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent implements OnInit {
  @Input()user:object;
  todoList: object;
  isLoaded = false;
  constructor(private http: HttpClient) {
 }
  configUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  ngOnInit() {
    this.http.get(this.configUrl)
      .subscribe(
        value => {
          this.todoList = value;
          this.isLoaded = true;
        },
        error => {
          console.log(error);
        }
      );
  }
  tab = ['data1','data2','data3','data4','data5'];

  onClickMe($event){
    console.log($event);
  }

  playlists=['playlist 1','playlist 2','playlist 3','playlist 4']
  addPlaylist(playlist: string){
    this.playlists.push(playlist);
  }

}
