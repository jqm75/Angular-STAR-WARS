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
  public allStarshipsLoaded: boolean = false;
  public loading: boolean = true;
  public loadingNextPage: boolean = false;

  @Input() showClasses: boolean = true;

  //@ViewChild('loading', {static: false}) private loadingElement!: ElementRef<HTMLDivElement>;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.getStarships(this.page!);
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  getStarships(page: number) {
    const tempStarshipsList: StarshipsList = { count: 0, next: null, previous: null, results: [] };
  
    if (this.loadingNextPage) {
      return;
    }

    this.loadingNextPage = true;
  
    this.swapiService.getStarships(page).subscribe(starshipsList => {
      tempStarshipsList.results = starshipsList.results;
      this.starshipsList.results = [...this.starshipsList.results, ...tempStarshipsList.results];

      this.page! = Number(starshipsList.next?.split('=')[1]);

      if(!starshipsList.next) {
        this.allStarshipsLoaded = true;
      }

      this.loading = false;
      this.loadingNextPage = false;
    });
  }

  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
  
    const scrollThreshold = bodyHeight - windowSize - 2500;
  
    if (scrollPosition > scrollThreshold && !this.allStarshipsLoaded && !this.loading && !this.loadingNextPage) {
      this.getStarships(this.page!);
    }
  }

  getStarshipId(url: string) {
    return url.split('/')[5];
  }
}
