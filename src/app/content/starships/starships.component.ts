import { Component } from '@angular/core';
import { SwapiService } from '../../core/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent {

  public starships : any

  constructor (
    public swapiService: SwapiService
  ){
    this.swapiService.getStarships().subscribe( resp => { 

        this.starships = resp.results
        
    })
  }

}
