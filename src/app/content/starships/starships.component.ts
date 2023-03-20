import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { StarshipsList } from '../../core/interfaces/swapi.starships.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent  {

  public starshipsList! : StarshipsList
  /* public id:number = 0; */

  constructor (
    public swapiService: SwapiService
  ){
    this.swapiService.getStarships().subscribe( resp => { 

        this.starshipsList = resp
        
    })
  }

  getStarshipId(url: string){

    return url.split('/')[5]
    
  }
  /* ngOnInit(): void {
    this.id = Number(this.starshipsList.url.split('/')[5])
  } */

}
