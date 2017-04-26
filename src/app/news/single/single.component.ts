import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html'
})
export class SingleComponent implements OnInit {

  slug: string;
  data: object;
  author: object;
  posts: object;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  formatDate(date: string) {
    let dateObj = new Date(date);
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let dateString = months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear();
    return dateString;
  }

  getImage(index: number) {
    if(this.data[index].acf.image) {
      return '<img [src]="' + this.data[index].acf.image.sizes['1600'] + '" class="post__image" />';
    }
  }

  checkSlug(slug: string) {
    if( slug === this.slug ){
      return true;
    }
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (res) => {
        this.slug = res.slug;
        this.dataService.getPosts('posts?slug=' + this.slug).subscribe(
          (res) => {
            this.data = res.json();
            this.author = this.dataService.getUser(this.data[0]['author']).subscribe(
              (res) => this.author = res.json()
            );
          },
          (err) => console.log(err)
        );

        this.dataService.getPosts('posts?per_page=5').subscribe(
          (res) => {
            this.posts = res.json();
          }
        );

      }
    );

  }

}
