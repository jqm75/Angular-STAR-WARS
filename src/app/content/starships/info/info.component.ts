import { Component } from '@angular/core';
import { Film } from 'src/app/core/interfaces/swapi.films.interface';
import { Starship } from 'src/app/core/interfaces/swapi.starships.interface';
import { Pilot } from '../../../core/interfaces/swapi.pilots.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  public starship!: Starship;
  public pilots: Pilot[] = [];
  public films: Film[] = [];
  
  constructor () {}




}
