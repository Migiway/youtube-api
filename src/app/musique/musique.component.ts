import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Video} from '../../model/Video';
import {SportContentService} from '../../service/sport/sport-content.service';
import {MusiqueContentService} from '../../service/musique/musique-content.service';

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css'],
  providers : [MusiqueContentService]
})
export class MusiqueComponent implements OnInit {

  responseVideos: Observable<any> ;
  musiqueVideo: Video[];




  constructor( private musiqueContentService: MusiqueContentService ) {

  }

  ngOnInit(): void {

    this.responseVideos = this.musiqueContentService.getMusiqueVideos();
    this.responseVideos.subscribe(
      (data: Video[]) => {
        this.musiqueVideo = data;

        console.log('---------------------------');
        console.log(this.musiqueVideo);
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
