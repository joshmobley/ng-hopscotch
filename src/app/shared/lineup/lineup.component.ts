import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  @Input() data: object;

  constructor(private dataService: DataService) { }

  getPhoto(slug: string) {

    /*this.dataService.getPosts('posts?slug=' + slug).subscribe(
      (res) => {
        console.log(res);
      }
    )*/
  }

  ngOnInit() {

  }

}
