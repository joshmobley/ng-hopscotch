import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getPosts( path: string) {
    return this.http.get('http://localhost:8000/wp-json/wp/v2/' + path);
  }



}
