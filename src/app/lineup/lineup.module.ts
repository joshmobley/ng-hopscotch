import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LineupComponent } from './lineup.component';
import { SpeakerComponent } from './speaker/speaker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'lineup', component: LineupComponent },
      { path: 'lineup/:slug', component: SpeakerComponent }
    ]),
    SharedModule
  ],
  declarations: [
    LineupComponent,
    SpeakerComponent
  ]
})
export class LineupModule { }
