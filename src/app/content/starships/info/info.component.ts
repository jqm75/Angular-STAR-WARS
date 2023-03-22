import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SwapiService } from '../services/swapi.service';

import { Starship, StarshipsList } from 'src/app/core/interfaces/swapi.starships.interface';
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
  
  public starshipImg!: string
  public starshipImgDefault: string = "../../../../assets/img/default.webp"
  
  constructor (
    public swapiService: SwapiService,
    private route:       ActivatedRoute
  ){}

  ngOnInit (): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.swapiService.getStarshipInfo(this.id).subscribe( resp => {
      
      console.log(resp);

      this.starship = resp;
      
    })

    this.starshipImg = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
  }
  
  getStarshipImgDefault(){
    this.starshipImg = this.starshipImgDefault
  }

}