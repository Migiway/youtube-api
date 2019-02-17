import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public videos = [];
  nextPage = '';
  prevPage = '';
  search = '';
  dangerousVideoUrl = '';
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getVideos(varSearch: string) {
    varSearch = varSearch.replace('', '%7C');
    this.search = varSearch;
    this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + varSearch +
      '&type=video&videoCaption=any&key=AIzaSyBnRWLy2jjb9Cpyadm3plaPd__94gJEGzo&maxResults=6')
      .subscribe((response: Array<Object>) => {
        this.videos = response['items'];
        this.nextPage = response['nextPageToken'];
        this.videos.forEach(element => {
          this.dangerousVideoUrl = 'http://www.youtube.com/embed/' + element['id']['videoId'] +
            '?enablejsapi=1&origin=http://example.com&rel=1';
          element['urlSecure'] = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
        });
      });
  }

}
