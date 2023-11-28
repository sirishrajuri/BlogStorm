import { Component, OnInit } from '@angular/core';
import { IFilms } from 'src/app/models/IFilms';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  
  films!:IFilms[]
  loading= false
  errorMessage=''
  constructor(private filmsService:FilmsService) {}
  ngOnInit(): void {
    this.loading= true
    this.filmsService.getFilmsList().subscribe(
      (data)=> {
      //@ts-ignore
      this.films =data
      this.loading= false
    }, (error)=> {
      this.errorMessage='Something went wrong... try later'
      this.loading= false
    })
  }
}
