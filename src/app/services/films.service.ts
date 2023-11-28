import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IFilms } from '../models/IFilms';
import { data } from 'src/mock';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private db: AngularFireDatabase) {}
  getFilmsList() {
    let userEmail = JSON.parse(localStorage.getItem('user')!);
    return  this.db.list<IFilms[]>(`${userEmail.email.replace('.','')}/data`).valueChanges();
    
  }

  updateFilmsList(checked:boolean,id:number) {
    let userEmail = JSON.parse(localStorage.getItem('user')!);
      return this.db.object(`${userEmail.email.replace('.','')}/data/${id}`).update({
        isBookmarked: !checked,
      })
  }

  createFilmsList(email:string) {
    this.db.object(`${email.replace('.','')}`).set({
      data:data
    })
      .then(() => {
        console.log('Data created successfully.');
      })
      .catch(error => {
        console.error('Error creating data:', error);
      });
  }
}
