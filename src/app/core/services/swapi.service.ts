import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  getStarships() {
    return this.http.get<any>('https://swapi.dev/api/starships/')
  }
}


