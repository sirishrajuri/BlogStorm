import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { API_URL } from 'src/environment/environment';
import { Question } from 'src/app/Interface/Question.interface';


@Component({
  selector: 'app-choose-questions',
  templateUrl: './choose-questions.component.html',
  styleUrls: ['./choose-questions.component.scss']
})
export class ChooseQuestionsComponent implements OnInit {
  selectedKeyword: string = "";
  questions: Question[] = [];
  selectedQuestions: Question[] = []; 
  loading:boolean = true;

  constructor(private dataService: DataService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dataService.currentKeyword.subscribe(keyword => {
      this.selectedKeyword = keyword;
      this.getQuestionsForKeyword(keyword);
    });
    this.loading=true;
    // this.questions=[
    //   { text: "Where are elections going on in India?", selected: false },
    //   { text: "Who was the longest serving prime minister of India?", selected: false },
    //   { text: "How many seats are there in UP Assembly?", selected: false },
    //   { text: "When there is election of PM in India?", selected: false },
    //   { text: "What elections are going in Telangana?", selected: false },
    //   { text: "When were elections last held in state government up?", selected: false },
    //   { text: "How many years are the state elections held in India?", selected: false },
    //   { text: "Where are elections going on in India?", selected: false },
    //   { text: "Where are elections going on in India?", selected: false },
    //   { text: "Where are elections going on in India?", selected: false }
    //   ];
  }

  getQuestionsForKeyword(keyword: string){
    console.log("ChooseQuestionsComponent: getQuestionsForKeyword",keyword);
    var formData: any = new FormData();
    formData.append('user_id', 'cherry123');
    formData.append('suggestion', keyword);

    this.httpClient.post(`${API_URL}/related_questions`, formData).subscribe((data:any) => {
      this.loading=false;
      console.log(data.questions);
      this.questions = data.questions.map((q: any) => ({text:q,selected:false}));
      console.log(this.questions);
    });
  }

  submitSelectedQuestions(): void {
    this.selectedQuestions = this.questions.filter(q => q.selected);
    this.dataService.updateSelectedQuestions(this.selectedQuestions);
    this.dataService.changeStep(3);
  }

  back(){
    this.dataService.changeStep(1);
  }

}
