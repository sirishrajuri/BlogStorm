import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFilms } from 'src/app/models/IFilms';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit{
  @Input() regularFilm ={} as IFilms
  @Input() films =[] as IFilms[]
  id!:number
  constructor(private filmsService: FilmsService) {}
  ngOnInit(): void {
   if(this.regularFilm) {
   
   }
  }
  updateFilmsList() {
 
    this.films.forEach((item,index)=> {
      if(item.title==this.regularFilm.title) {
        this.filmsService.updateFilmsList(this.regularFilm.isBookmarked, index)
      }
    })
    
  }
}
