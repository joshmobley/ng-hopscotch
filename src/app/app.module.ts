import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ExperienceModule } from './experience/experience.module';
import { HomeModule } from './home/home.module';
import { LineupModule } from './lineup/lineup.module';
import { NewsModule } from './news/news.module';
import { TicketsModule } from './tickets/tickets.module';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExperienceModule,
    FormsModule,
    HomeModule,
    HttpModule,
    LineupModule,
    NewsModule,
    TicketsModule,
    RouterModule.forRoot([])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
