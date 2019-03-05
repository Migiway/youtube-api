import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {YoutubeDescriptionsLoggedInService} from '../../service/descriptions/youtube-descriptions-logged-in.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-interact-description-modal',
  templateUrl: './interact-description-modal.component.html',
  styleUrls: ['./interact-description-modal.component.css']
})
export class InteractDescriptionModalComponent implements OnInit {
  @Input() isInteractDescriptionPopinOpen: boolean;
  @Input() playlistDescriptionId: string;
  @Input() playlistTitle: string;
  @Input() playlistDescription: string;
  @Output() closeDescriptionPopin = new EventEmitter<Boolean>();
  constructor(private youtubeDescriptions: YoutubeDescriptionsLoggedInService) { }
  ngOnInit() {
  }
  eventCloseDescriptionModal() {
    this.closeDescriptionPopin.emit(false);
  }
  putDescriptionToVideo(descriptionText: string, titleText: string, descriptionForm: NgForm) {
    this.youtubeDescriptions.putDescriptionsForVideoId(this.playlistDescriptionId, descriptionText, titleText)
      .then(res => {
        descriptionForm.reset();
        this.eventCloseDescriptionModal();
      })
      .catch(err => console.log('Créer un composant de message d\'erreur', err));
  }

}
