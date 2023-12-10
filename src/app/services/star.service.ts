import { Injectable } from '@angular/core';
import { People } from '../interfaces/people.array';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  public people: People[] = [];
  constructor(private http: HttpClient) {
    this.http.get('https://swapi.dev/api/people/?page=1')
    .subscribe((resp: any) => {
        this.people.push(...resp.results);
    });
  }
}
