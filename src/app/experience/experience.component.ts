import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  data: object;

  constructor(private dataService: DataService) { }

  getButton(index: number) {
    let item = this.data[0]['acf'].experience[index];

    if( item.button_label && (item.width == 'two')) {
      return '<a class="button--white" href="' + item.button_url + '">' + item.button_label + '</a>';
    }else{
      return '<a class="button" href="' + item.button_url + '">' + item.button_label + '</a>';
    }
  }

  getImage(index: number) {
    let item = this.data[0]['acf'].experience[index];
    let styles = {};

    if( item.image ){
      styles['background-image'] = 'url(' + item.image.sizes['800'] + ')';
      return styles;
    }

  }

  getClasses(index: number) {
    let item = this.data[0]['acf'].experience[index];
    let classList = [];

    if( item.button_label && !item.title ){
      classList.push('tile--button');
    }

    if(item.width == 'two'){
      classList.push('tile--med');
    }

    if(classList.length == 0) {
      classList.push('tile--small');
    }

    classList.join(' ');

    return classList;
  }

  ngOnInit() {

    this.dataService.getPosts('pages?slug=experience&d').subscribe(
      (res) => {
        this.data = res.json();
        console.log( this.data );
      }
    );
  }

}
