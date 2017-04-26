import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html'
})
export class PromoComponent implements OnInit {

  @Input() data: object;
  @Input() count: number;

  constructor() { }

  isEvenCount() {
    if(this.count % 2 == 0) {
      return true;
    }
  }

  getImage() {
    let styles = {};

    styles['background-image'] = 'url(' + this.data['image'].sizes['800'] + ')';
    return styles;

  }

  ngOnInit() {
    console.log('promo');
  }

}
