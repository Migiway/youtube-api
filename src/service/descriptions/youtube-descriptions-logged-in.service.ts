import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class YoutubeDescriptionsLoggedInService {
  youtubeDescriptionsBaseUrl = 'https://www.googleapis.com/youtube/v3/playlists';
 
  constructor(private httpClient: HttpClient) { }

  putDescriptionsForVideoId(playlistId: string, descriptionText: string, titleText: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.put(this.youtubeDescriptionsBaseUrl, {
        id: playlistId,
        snippet: {
          title: titleText,
          description: descriptionText,
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
