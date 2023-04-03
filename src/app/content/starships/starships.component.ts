import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SwapiService } from './services/swapi.service';
import { StarshipsList } from '../../core/interfaces/swapi.starships.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})

export class StarshipsComponent implements OnInit {
  public starshipsList: StarshipsList = { count: 0, next: null, previous: null, results: [] };
  public page: number | null = 1;
  
  @Input() showClasses: boolean = true;

  @ViewChild('loading', {static: false}) private loading!: ElementRef<HTMLDivElement>;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.getStarships();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  getStarships(page: number = 1) {
    this.swapiService.getStarships(page).subscribe(starshipsList => {
        
      this.starshipsList.results = [...this.starshipsList.results, ...starshipsList.results];
      if(starshipsList.next){
        this.page = Number(starshipsList.next?.split('=')[1]);
        //console.log(starshipsList.next?.split('=')[1]);
      } else {
        this.page = null;
      }
      
    });
  }

  onScroll() {
    if (this.page != null) {
      
      const rect = this.loading.nativeElement.getBoundingClientRect();
      const bottomShown = rect.bottom <= window.innerHeight;
      if(bottomShown){
        this.getStarships(this.page);
      }
    }
  }

  getStarshipId(url: string) {
    return url.split('/')[5];
  }
}
