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

  private _url = 'https://swapi.py4e.com/api'


  public starship!: StarshipsList;
  public pilots:    PilotsList[] = [];
  public films:     FilmsList[] = [];
  public text:      string = "Title"

  constructor( private http: HttpClient ) { }

  getStarships(page:number = 1){
    return this.http.get<StarshipsList>(`${this._url}/starships/?page=${page}`)
  }

  getStarshipInfo(id: number):Observable<Starship> {
    return this.http.get<Starship>(`${this._url}/starships/${id}`)
  } 

  checkImageExists(imageURL: string):Observable<any> {
    return this.http.get<any>(imageURL)
    
  }

  /* getPilots( pilots: string[] ) {

    
    return this.http.get<PilotsList>(`${this._url}/people/${pilots}`)
  } */

  // LO NUEVO
  getPilot(id: number): Observable<Pilot> {
    return this.http.get<Pilot>(`${this._url}/people/${id}`)
  }

  getPilotIdFromUrl(url: string): number {
    const pilotId = url.split('/');
    return parseInt( pilotId[ pilotId.length - 2 ] );
  }
  // FIN DE LO NUEVO

  getFilms(){
    return this.http.get<FilmsList>(`${this._url}/films`)
  }

}