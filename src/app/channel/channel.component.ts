import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../../service/channel/channel.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  providers: [ChannelService]
})
export class ChannelComponent implements OnInit {

  constructor(private channelService: ChannelService) { }

  ngOnInit() {
    this.channelService.getChannels();
  }

}
