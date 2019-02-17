import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class SearchService {

  ChannelIds = ['UCjRqDyF6BnpE7_FW9TuMZlw', 'UC0Dt2F2e-EEIj1vg_hvFTdQ', 'UCAcMb_Cra0rIl6u6CdLs_TQ'];
  channelUrlApiBase = 'https://www.googleapis.com/youtube/v3/channels?' +
    'part=snippet&id=UCjRqDyF6BnpE7_FW9TuMZlw&fields=items(statistics(subscriberCount%2CvideoCount))&key=';
  channelUrlApi = '';
  allChannels = [] ;
  constructor(private https: HttpClient) { }

  getChannels () {
    this.ChannelIds.forEach(function (value) {
      this.channelUrlApi = this.channelUrlApiBase + value ;
      this.https
        .get(this.channelUrlApi)
        .pipe(map((data) => {
          console.log(data);
        }));

     /* return this.https
        .get(this.sportUrlApi)
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
        }));*/
    });
  }
  }

