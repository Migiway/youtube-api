import { Component, OnInit } from '@angular/core';
import {SportContentService} from '../../service/sport/sport-content.service';
import {Observable} from 'rxjs';
import {Video} from '../../model/Video';

@Component({
  selector: 'app-sport-content',
  templateUrl: './sport-content.component.html',
  styleUrls: ['./sport-content.component.css'],
  providers : [SportContentService]
})
export class SportContentComponent implements OnInit {


  responseVideos: Observable<any> ;
  sportVideo: Video[];




  constructor( private sportContentService: SportContentService) {

  }

  ngOnInit(): void {

    this.responseVideos = this.sportContentService.getSportVideos();
    this.responseVideos.subscribe(
      (data: Video[]) => {
        this.sportVideo = data;

        console.log('---------------------------');
        console.log(this.sportVideo);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('on complete');
      }
    );
  }

}
