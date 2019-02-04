import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusiqueContentService {

  musiqueUrlApi = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=8' +
    '&playlistId=PLw-VjHDlEOguagnIdctLl5tykDxM5yQn4&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo';


  constructor(private https: HttpClient) { }

  getMusiqueVideos (): Observable<object> {
    return this.https
      .get(this.musiqueUrlApi)
      .pipe(map((data) => {
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
