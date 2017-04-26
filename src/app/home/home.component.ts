import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  data: object;
  promoCounter: number = 0;

  constructor (private dataService: DataService) {}

  promoCounterInc() {
    this.promoCounter++;
    console.log('ran' + this.promoCounter);
    return this.promoCounter;
  }


  ngOnInit() {
    this.dataService.getPosts('pages?slug=home&d').subscribe(
      (res) => {
        console.log(res);
        res = res.json();
        this.data = res[0].acf.content;
      },
      (err)=> console.log(err)
    );

  }

}
