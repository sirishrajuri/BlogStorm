import { Component } from '@angular/core';
import { ChooseQuestionsComponent } from 'src/app/components/choose-questions/choose-questions.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent {
  currentStep = 1;
  readonly totalSteps = 4;

  constructor(private dataService : DataService){
    
  }

  ngOnInit(): void {
    this.dataService.currentStep.subscribe( step=>{
        console.log(step);
        this.currentStep =step;
    })
  }

  get isAtStart(): boolean {
    return this.currentStep === 1;
  }

  get isAtEnd(): boolean {
    return this.currentStep === this.totalSteps;
  }

  advanceStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  regressStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  generateBlogs():void{
    if(this.currentStep==4){
      
    }
  }
}
