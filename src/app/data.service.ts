import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {

  url: string = 'http://hopdesign.wpengine.com/wp-json/wp/v2/';

  constructor(private http: Http) { }

  getPosts(path: string) {
    return this.http.get(this.url + path);
  }

  getUser(id: number) {
    return this.http.get(this.url + 'users/' + id);
  }
}
