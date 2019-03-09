import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class YoutubeRateLoggedInService {
  youtubeRateBaseUrl = 'https://www.googleapis.com/youtube/v3/videos/rate';


  constructor(private httpClient: HttpClient,
              private messageService: MessageService) { }

  postRateForVideoId(videoId: string, rateType: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.youtubeRateBaseUrl, {},
          {
        params: {
          id: videoId,
          rating: rateType,
          key: 'AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo'
        }
      }).subscribe(res => {
          resolve(res);
          if (rateType === 'like') {
          this.messageService.add({severity: 'success', summary: 'Like/Dislike', detail: 'Vous venez d\'aimer la vidéo'});
          }
          if (rateType === 'dislike') {
            this.messageService.add({severity: 'success', summary: 'Like/Dislike', detail: 'Vous venez de disliker la vidéo'});
          }
        },
        err => {
          reject(err);
          this.messageService.add({severity: 'error', summary: 'Like/Dislike', detail: 'Rate impossible à poster' });
        });
    });
  }
}
