import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {YoutubeCommentsLoggedInService} from '../../service/comments/youtube-comments-logged-in.service';
import {NgForm} from '@angular/forms';
import {YoutubeRateLoggedInService} from '../../service/rate/youtube-rate-logged-in.service';

@Component({
  selector: 'app-interact-rate-modal',
  templateUrl: './interact-rate-modal.component.html',
  styleUrls: ['./interact-rate-modal.component.css']
})
export class InteractRateModalComponent implements OnInit {

  @Input() isInteractRatePopinOpen: boolean;
  @Input() videoRateId: string;
  @Input() videoTitle: string;
  @Output() closeRatePopin = new EventEmitter<Boolean>();
  constructor(private youtubeRateLoggedInService: YoutubeRateLoggedInService) { }

  ngOnInit() {
  }

  eventCloseRateModal() {
    this.closeRatePopin.emit(false);
  }

  postRateToVideo(rateType: string) {
    console.log(rateType);
    this.youtubeRateLoggedInService.postRateForVideoId(this.videoRateId, rateType)
      .then(res => {
        this.eventCloseRateModal();
      })
      .catch(err => console.log('Créer un composant de message d\'erreur', err));
  }

}
