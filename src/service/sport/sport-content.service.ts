import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class SportContentService {

  sportUrlApi = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4' +
    '&playlistId=PLx6bGx4zt6EmR3pXhCZNhMYWTh7GJaJ8X&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo';


  constructor(private https: HttpClient) { }

  getSportVideos (): Observable<object> {
    return this.https
      .get(this.sportUrlApi)
      .pipe(map((data: any) => {
        console.log(data);
        const items = data.items;
        console.log(items);
        const videos = items.map((video) => {
          return {
            title: video.snippet.title,
            link: video.snippet.resourceId.videoId,
            imgUrl : video.snippet.thumbnails.medium.url,
          };
        });

        console.log(videos);
        return videos;
      }));
  }

}
