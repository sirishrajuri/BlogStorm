import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Question } from 'src/app/Interface/Question.interface';
import { DataService } from 'src/app/services/data.service';
import { API_URL } from 'src/environment/environment';
import { data } from 'src/mock';

@Component({
  selector: 'app-choose-content-settings',
  templateUrl: './choose-content-settings.component.html',
  styleUrls: ['./choose-content-settings.component.scss']
})
export class ChooseContentSettingsComponent {
  loading = false; 

  settings = {
    contentType: '',
    inboundLink: false,
    outboundLink: false,
    image: false,
    generationModel: '',
    wordpressSite: ''
  };

  contentTypeOptions = ['Short Form Contenet', 'Long Form Content'];
  generationModelOptions = ['GPT 3.5', 'GPT 4'];
  wordpressSiteOptions = ['Site 1', 'Site 2', 'Site 3'];

  selectedQuestions: Question[] = []; 

  constructor(private dataService: DataService,private httpClient: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.dataService.selectedQuestions.subscribe(Questions => {
      console.log(Questions);
      this.selectedQuestions = Questions;
    });
  }

  generateBlogs() {
    this.loading = true;

    // this.selectedQuestions.forEach(question => {
    //   let formData = new FormData();
    //   formData.append('user_id', 'cherry123');
    //   formData.append('model', "gpt3.5");
    //   formData.append('query', question.text); 
    //   formData.append('create_image', "false"); 
    //   //formData.append('create_image', (String)(this.settings.image)); 
    //   console.log("generation Blogs: ",question.text);
    //   this.httpClient.post(`${API_URL}/generate_blog`, formData).subscribe(
    //     (data)=>{
    //       console.log(data);
    //     }
    //   );
    // });
    console.log("selectedQuestions: "+this.selectedQuestions);
    const requests = this.selectedQuestions.map(question => {
      let formData = new FormData();
      formData.append('user_id', 'cherry123');
      formData.append('model', "gpt3.5");
      formData.append('query', question.text); 
      formData.append('create_image', "false");
      console.log(question.text);
      // Return the http post observable
      return this.httpClient.post(`${API_URL}/generate_blog`, formData);
    });
  
    // Use forkJoin to execute all requests and wait for all of them to complete
    forkJoin(requests).subscribe(
      (responses) => {
        // All requests are completed at this point
        console.log('All requests completed', responses);
  
        // Navigate to the desired route
        this.loading = false;
        this.router.navigate(['/blogs']);
      },
      (error) => {
        // Handle error
        this.loading = false;
        console.error('An error occurred', error);
      }
    );
    
  }  

  back(){
    this.dataService.changeStep(3);
  }

}
