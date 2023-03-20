import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Starship, StarshipsList } from '../interfaces/swapi.starships.interface';
import { Pilot, PilotsList } from '../interfaces/swapi.pilots.interface';
import { Film, FilmsList } from '../interfaces/swapi.films.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  public starship!: StarshipsList;
  public pilots: PilotsList[] = [];
  public films: FilmsList[] = [];

  constructor( private http: HttpClient ) { }

  getStarships(){
    return this.http.get<StarshipsList>('https://swapi.py4e.com/api/starships/')
  }

  getStarshipInfo(id: number):Observable<StarshipsList> {

    return this.http.get<StarshipsList>('https://swapi.py4e.com/api/starships/' + id)
  } 

}