import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'experience', component: ExperienceComponent }
    ]),
    SharedModule
  ],
  declarations: [ExperienceComponent]
})
export class ExperienceModule { }
