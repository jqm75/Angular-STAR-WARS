import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Starship, StarshipsList } from '../../../core/interfaces/swapi.starships.interface';
import { Pilot, PilotsList } from '../../../core/interfaces/swapi.pilots.interface';
import { Film, FilmsList } from '../../../core/interfaces/swapi.films.interface';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private _url = 'https://swapi.py4e.com/api'

  public starship!: StarshipsList;
  public pilots: PilotsList[] = [];
  public films: FilmsList[] = [];
  public text: string = "Title"

  constructor(private http: HttpClient) { }

  /* getStarships(page: number = 1): Observable<StarshipsList> {
    const url = `${this._url}/starships?page=${page}`;
    return this.http.get<StarshipsList>(url).pipe(
      map(response => {
        const results = response.results.map((starship: Starship, index: number) => ({
          ...starship,
          id: starship.url.split('/')[5],
          _delayed: index >= 10 ? true : false // indicamos si la nave debe cargarse con delay
        }));
        const delayedResults = results.filter((starship: Starship) => starship._delayed); // obtenemos las naves que deben cargarse con delay
        const nonDelayedResults = results.filter((starship: Starship) => !starship._delayed); // obtenemos las naves que no deben cargarse con delay
        const remainingResults = [...delayedResults, ...nonDelayedResults]; // concatenamos ambas listas para respetar el orden original
        response.results = remainingResults;
        return response;
      }),
    
    );
  } */
  
  getStarships(page:number = 1){
    return this.http.get<StarshipsList>(`${this._url}/starships/?page=${page}`)
  }

  getStarshipInfo(id: number): Observable<Starship> {
    return this.http.get<Starship>(`${this._url}/starships/${id}`)
  }

  checkImageExists(imageURL: string): Observable<any> {
    return this.http.get<any>(imageURL)
  }

  // LO NUEVO para PILOTOS y FILMS
  getPilot(id: number): Observable<Pilot> {
    return this.http.get<Pilot>(`${this._url}/people/${id}`)
  }

  getPilotIdFromUrl(url: string): number {
    const pilotId = url.split('/');
    return parseInt(pilotId[pilotId.length - 2]);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this._url}/films/${id}`)
  }

  getFilmIdFromUrl(url: string): number {
    const filmId = url.split('/');
    return parseInt(filmId[filmId.length - 2]);
  }
  // FIN DE LO NUEVO
}
