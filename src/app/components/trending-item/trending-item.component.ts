import { Component,Input } from '@angular/core';
import { IFilms } from 'src/app/models/IFilms';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.scss']
})
export class TrendingItemComponent {
  @Input() trendingFilm ={} as IFilms
  @Input() index!:number
  constructor(private filmsService: FilmsService) {}
  
  updateFilmsList(id:number) {
    
    this.filmsService.updateFilmsList(this.trendingFilm.isBookmarked, id)
  }
}
