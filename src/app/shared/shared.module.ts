import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PromoComponent } from './promo/promo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PromoComponent
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PromoComponent
  ]
})
export class SharedModule { }
