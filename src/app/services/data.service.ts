import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../Interface/Question.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private keywordSource = new BehaviorSubject<string>('');
  private stepSource = new BehaviorSubject<number>(1);
  private selectedQuestionsSource = new BehaviorSubject<Question[]>([]);


  currentKeyword = this.keywordSource.asObservable();
  currentStep=this.stepSource.asObservable();
  selectedQuestions = this.selectedQuestionsSource.asObservable();

  constructor() { }

  changeKeyword(keyword: string) {
    this.keywordSource.next(keyword);
  }

  changeStep(step: number){
    this.stepSource.next(step);
  }

  updateSelectedQuestions(questions: Question[]): void {
    console.log("updateSelectedQuestions:",questions);
    this.selectedQuestionsSource.next(questions);
  }
}
