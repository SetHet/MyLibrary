import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../models/backend.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient
  ) { }

  getTest () {
    return this.http.get<string>(this.url);
  }

  getBooks () {
    return this.http.get<Books>(this.url + 'books/list');
  }
}
