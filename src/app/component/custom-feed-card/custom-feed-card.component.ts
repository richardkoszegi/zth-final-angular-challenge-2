import { Component, OnInit, Input } from '@angular/core';
import { RssModel } from '../../model/rss.model';

@Component({
  selector: 'app-custom-feed-card',
  templateUrl: './custom-feed-card.component.html',
  styleUrls: ['./custom-feed-card.component.css']
})
export class CustomFeedCardComponent implements OnInit {

  @Input() rssFeed: RssModel;

  constructor() { }

  ngOnInit() {
  }

}
