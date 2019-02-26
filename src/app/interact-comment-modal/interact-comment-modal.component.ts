import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {YoutubeCommentsLoggedInService} from '../../service/comments/youtube-comments-logged-in.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-interact-comment-modal',
  templateUrl: './interact-comment-modal.component.html',
  styleUrls: ['./interact-comment-modal.component.css']
})
export class InteractCommentModalComponent implements OnInit {
  @Input() isInteractCommentPopinOpen: boolean;
  @Input() videoCommentId: string;
  @Input() videoTitle: string;
  @Output() closeCommentPopin = new EventEmitter<Boolean>();
  constructor(private youtubeComments: YoutubeCommentsLoggedInService) { }
  ngOnInit() {
  }
  eventCloseCommentModal() {
    this.closeCommentPopin.emit(false);
  }
  postCommentToVideo(commentText: string, commentForm: NgForm) {
    this.youtubeComments.postCommentsForVideoId(this.videoCommentId, commentText)
      .then(res => {
        commentForm.reset();
        this.eventCloseCommentModal();
      })
      .catch(err => console.log('Créer un composant de message d\'erreur', err));
  }

}
