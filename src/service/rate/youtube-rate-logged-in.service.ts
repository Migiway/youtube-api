import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeRateLoggedInService {
  youtubeRateBaseUrl = 'https://www.googleapis.com/youtube/v3/videos/rate';


  constructor(private httpClient: HttpClient) { }

  postRateForVideoId(videoId: string, rateType: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.youtubeRateBaseUrl, {},
          {
        params: {
          id: videoId,
          rating: rateType,
          key: 'AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo'
        }
      }).subscribe(res => resolve(res), err => reject(err));
    });
  }
}
