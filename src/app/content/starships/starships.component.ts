/* import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { StarshipsList } from '../../core/interfaces/swapi.starships.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent  {

  public starshipsList! : StarshipsList

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


} */

import { Component, OnInit } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { StarshipsList } from '../../core/interfaces/swapi.starships.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  public starshipsList: StarshipsList = { count: 0, next: null, previous: null, results: [] };
  public page = 1;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.getStarships();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  getStarships(page?: number) {
    this.swapiService.getStarships(page)
      .subscribe(starshipsList => {
        if (page) {
          this.starshipsList.results = [...this.starshipsList.results, ...starshipsList.results];
        } else {
          this.starshipsList = starshipsList;
        }
      });
  }

  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    const scrollThreshold = bodyHeight - windowSize - 2500;

    if (scrollPosition > scrollThreshold && this.starshipsList.next !== null) {
      this.page++;
      this.getStarships(this.page);
    }
  }

  getStarshipId(url: string) {
    return url.split('/')[5];
  }
}
