import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class YoutubeCommentsLoggedInService {
  youtubeCommentsBaseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';

  
  constructor(private httpClient: HttpClient,
              private messageService: MessageService) { }

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
      }).subscribe(res => {
          resolve(res);
          this.messageService.add({severity: 'success', summary: 'Commentaire', detail: 'Commentaire posté avec succès'});
        },
          err => {
          reject(err);
            this.messageService.add({severity: 'error', summary: 'Commentaire', detail: 'Le commentaire n\'a pas été posté' });
          });
    });
  }
}
