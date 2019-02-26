import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeCommentsLoggedInService {
  youtubeCommentsBaseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
  constructor(private httpClient: HttpClient) { }

  postCommentsForVideoId(videoId: string, commentText: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.youtubeCommentsBaseUrl, {
        snippet: {
          videoId,
          topLevelComment: {
            snippet: {
              textOriginal: commentText,
            },
          },
        },
      }, {
        params: {
          'part': 'snippet',
          key: 'AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo',
        },
      }).subscribe(res => resolve(res), err => reject(err));
    });
  }
}
