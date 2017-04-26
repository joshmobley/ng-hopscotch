import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {

  @Input() data: object;

  constructor() { }

  getImage() {
    let styles = {};

    styles['background-image'] = 'url(' + this.data['image'].sizes['1600'] + ')';
    return styles;

  }

  ngOnInit() {
    console.log(this.data);
  }

}
