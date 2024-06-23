import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private jokes_api = 'http://localhost:3000/api/jokes';
  // private jokes_api = '/api/jokes';

  constructor(private http: HttpClient) {}

  getJokes() {
    // return fetch(this.jokes_api);
    return this.http.get(this.jokes_api);
  }
}
