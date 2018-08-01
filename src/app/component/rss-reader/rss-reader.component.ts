import { Component, OnInit } from '@angular/core';
import { RssService } from '../../service/rss.service';
import { RssModel } from '../../model/rss.model';

@Component({
  selector: 'app-rss-reader',
  templateUrl: './rss-reader.component.html',
  styleUrls: ['./rss-reader.component.css']
})
export class RssReaderComponent implements OnInit {

  rssFeeds: RssModel[];

  constructor(private rssService: RssService) { }

  ngOnInit() {
    this.rssService.getRssFeed().subscribe((data) => {
      this.rssFeeds = data.items;
      console.log(this.rssFeeds)
    })
  }

}
