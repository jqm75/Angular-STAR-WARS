/* import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SwapiService } from '../../../core/services/swapi.service';

import { StarshipsComponent } from '../starships.component';

import { Starship } from 'src/app/core/interfaces/swapi.starships.interface';
import { StarshipsList } from '../../../core/interfaces/swapi.starships.interface';
import { Film } from 'src/app/core/interfaces/swapi.films.interface';
import { Pilot } from '../../../core/interfaces/swapi.pilots.interface';

@Component({
  selector:    'app-info',
  templateUrl: './info.component.html',
  styleUrls:   ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public id:        number = 0;
  public starship!: Starship;
  public pilots:    Pilot[] = [];
  public films:     Film[] = [];
  
  
  ngOnInit (): void { [this.id] = +this.route.snapshot.paramMap.get ('id'); 
    this.SwapiService.getStarshipInfo(this.id).subscribe( resp => { 
      this.starship = resp; 
    }) }
    
  constructor (
    //public swapiService: SwapiService,
    private route:       ActivatedRoute
  ){

    
    this.swapiService.getStarshipInfo(this.id).subscribe( resp => {  //Cómo quito el 12
      
      //this.starship = 

      console.log(resp);
      
  })
  }
}
 */


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { SwapiService } from '../../../core/services/swapi.service';

import { StarshipsComponent } from '../starships.component';

import { Starship } from 'src/app/core/interfaces/swapi.starships.interface';
import { StarshipsList } from '../../../core/interfaces/swapi.starships.interface';
import { Film } from 'src/app/core/interfaces/swapi.films.interface';
import { Pilot } from '../../../core/interfaces/swapi.pilots.interface';

@Component({
  selector:    'app-info',
  templateUrl: './info.component.html',
  styleUrls:   ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public id:        number = 0;
  public starship!: Starship;
  public pilots:    Pilot[] = [];
  public films:     Film[] = [];
  
  ngOnInit (): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.swapiService.getStarshipInfo(this.id).subscribe( resp => {
      //this.starship = resp;
      console.log(resp);
    })
  }
    
  constructor (
    public swapiService: SwapiService,
    private route:       ActivatedRoute
  ){}
}