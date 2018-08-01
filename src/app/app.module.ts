import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatToolbarModule, MatMenuModule, MatButtonModule, MatInputModule, MatCardModule,} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RssReaderComponent } from './component/rss-reader/rss-reader.component';
import { HomeComponent } from './component/home/home.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'rss-reader', component: RssReaderComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RssReaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
