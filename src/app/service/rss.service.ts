import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RssModel } from "../model/rss.model";
import { Observable } from "rxjs";

@Injectable()
export class RssService {

    constructor(private httpClient: HttpClient) {}

    getRssFeed(): Observable<any> {
        return this.httpClient.get('https://api.rss2json.com/v1/api.json?rss_url=https://www.theverge.com/rss/index.xml&api_key=m3bc5cicvpze8zepghfgfwcpbrrmdb9aaoozeajg');
    }
}