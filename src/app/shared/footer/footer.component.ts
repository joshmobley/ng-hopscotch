import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  randomInt: number;
  quotes: [string] = [
    'The energy, passion, and enthusiasm that I witnessed, has now been rekindled in me.',
    'A year’s worth of inspiration in one delicious, social nugget.',
    'A meeting of creative minds and local professionals changing the meaning of design.',
    'Hopscotch Design Festival has a gritty, design-focused, innovative edge that other conferences just don’t have.'
  ];

  constructor() { }

  returnImage() {
    let styles = {};
    let i = Math.floor(Math.random()*7) + 1;
    styles['background-image'] = 'url(http://hopdesign.wpengine.com/wp-content/uploads/2017/04/Footer_hero_image_' + i + '-1000x667.jpg)';
    return styles;

  }

  ngOnInit() {
    this.randomInt = Math.floor(Math.random() * 3);
  }

}
