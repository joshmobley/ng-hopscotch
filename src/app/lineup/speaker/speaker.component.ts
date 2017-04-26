import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: [ './speaker.component.scss' ]
})
export class SpeakerComponent implements OnInit {

  slug: string;
  data: object;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  getImage(index: number) {
    if (this.data[index].acf.image_hover) {
      return this.data[index].acf.image_hover.sizes['800'];
    } else {
      return 'http://placehold.it/400x400';
    }
  }

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.params.slug;
    this.dataService.getPosts('lineup?slug=' + this.slug).subscribe(
      (res) => {
        this.data = res.json();
        console.log(this.data);
      },
      (err) => console.log(err)
    );
  }

}
