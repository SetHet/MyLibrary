import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url = 'http://localhost:3000/api/test';

  constructor(
    private http: HttpClient
  ) { }

  getTest () {
    return this.http.get<string>(this.url);
  }
}
