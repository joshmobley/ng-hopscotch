import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  data: object;

  constructor(private dataService: DataService) { }

  formatDate(date: string) {
    let dateObj = new Date(date);
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let dateString = months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
    return dateString;
  }

  ngOnInit() {

    this.dataService.getPosts('posts').subscribe(
      (res) => {
        this.data = res.json();
      },
      (err) => console.log(err)
    );

  }

}
