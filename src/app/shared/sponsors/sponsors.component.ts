import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  @Input() data: object;

  constructor() { }

  ngOnInit() {

    console.log( this.data );
  }

}
