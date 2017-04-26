import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './news.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'news', component: NewsComponent },
      { path: 'news/:slug', component: SingleComponent }
    ]),
    SharedModule
  ],
  declarations: [NewsComponent, SingleComponent]
})
export class NewsModule { }
