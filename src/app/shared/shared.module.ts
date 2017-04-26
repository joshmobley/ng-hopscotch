import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PromoComponent } from './promo/promo.component';
import { LineupComponent } from './lineup/lineup.component';
import { HeadlineComponent } from './headline/headline.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PromoComponent,
    LineupComponent,
    HeadlineComponent,
    SponsorsComponent
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PromoComponent,
    LineupComponent,
    SponsorsComponent,
    HeadlineComponent
  ]
})
export class SharedModule { }
