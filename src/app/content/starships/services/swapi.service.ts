import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Starship, StarshipsList } from '../../../core/interfaces/swapi.starships.interface';
import { Pilot, PilotsList } from '../../../core/interfaces/swapi.pilots.interface';
import { Film, FilmsList } from '../../../core/interfaces/swapi.films.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private _url = 'https://swapi.py4e.com/api/starships'

  public starship!: StarshipsList;
  public pilots: PilotsList[] = [];
  public films: FilmsList[] = [];

  constructor( private http: HttpClient ) { }

  getStarships(page:number = 1){
    return this.http.get<StarshipsList>(`${this._url}?page=${page}`)
  }

  getStarshipInfo(id: number):Observable<Starship> {

    return this.http.get<Starship>(`${this._url}/${id}`)
  } 

}