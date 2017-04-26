import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html'
})
export class LineupComponent implements OnInit {

  data: object;

  constructor(private dataService: DataService) { }

  getImage(index: number) {
    if (this.data[index].acf.image) {
      return this.data[index].acf.image.sizes['400'];
    } else {
      return 'http://placehold.it/400x400';
    }
  }

  getHoverImage(index: number) {
    if (this.data[index].acf.image_hover) {
      return this.data[index].acf.image_hover.sizes['400'];
    } else {
      return 'http://placehold.it/400x400';
    }
  }

  ngOnInit() {
    this.dataService.getPosts('lineup?orderby=title&order=asc&per_page=100&a').subscribe(
      (res) => {
        res = res.json();
        this.data = res;
        console.log(this.data);
      },
      (err) => console.log(err)
    );
  }

}
