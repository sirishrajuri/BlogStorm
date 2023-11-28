import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { API_URL } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enter-keyword',
  templateUrl: './enter-keyword.component.html',
  styleUrls: ['./enter-keyword.component.scss']
})
export class EnterKeywordComponent {
  keyword: string = '';
  showResults: boolean = false;
  relatedKeywords: any[] = []; 
  suggest=false;
  suggestedTopics: string[] = ['TikTok Ads', 'Sustainable Aviation Fuel', 'Anc Earbuds','World Cup','Elections in India']; 


  constructor(private dataService : DataService, private httpClient: HttpClient) { }

  getKeywords(): void {
    var formData: any = new FormData();
    formData.append('user_id', 'cherry123');
    formData.append('location', "usa");
    formData.append('language', "end");
    formData.append('keywords', this.keyword);

    this.httpClient.post(`${API_URL}/suggestions`, formData).subscribe((data:any) => {
      this.showResults = true;
      console.log(data);
      console.log(data.suggestions);
      this.relatedKeywords = data.suggestions;
    });
  }

  selectKeyword(keyword: any): void {
    this.dataService.changeKeyword(keyword);
    this.dataService.changeStep(2);
  }

  selectTopic(topic:any){
    this.keyword=topic;
  }

  suggestNewTopics(){
    this.suggest = !this.suggest;
  }
}
