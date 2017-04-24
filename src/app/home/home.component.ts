import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: object;

  constructor (private dataService: DataService) {}


  ngOnInit() {
    this.dataService.getPosts('pages?slug=home').subscribe(
      (res) => {
        res = res.json();
        this.data = res[0].acf.content;
      },
      (err)=> console.log(err)
    );

  }

}
