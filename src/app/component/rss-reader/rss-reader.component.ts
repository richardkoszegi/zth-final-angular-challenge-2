import { Component } from '@angular/core';
import { RssService } from '../../service/rss.service';
import { RssModel } from '../../model/rss.model';

@Component({
  selector: 'app-rss-reader',
  templateUrl: './rss-reader.component.html',
  styleUrls: ['./rss-reader.component.css']
})
export class RssReaderComponent {

  rssFeeds: RssModel[];
  loadButtonLabel= 'Betöltés';

  constructor(private rssService: RssService) { }

  reloadFeeds() {
    this.rssService.getRssFeed().subscribe((data) => {
      this.rssFeeds = data.items;
      this.loadButtonLabel = 'Feedek frissítése';
    })
  }

}
