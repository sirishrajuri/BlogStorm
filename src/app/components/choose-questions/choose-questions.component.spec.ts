import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseQuestionsComponent } from './choose-questions.component';

describe('ChooseQuestionsComponent', () => {
  let component: ChooseQuestionsComponent;
  let fixture: ComponentFixture<ChooseQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseQuestionsComponent]
    });
    fixture = TestBed.createComponent(ChooseQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
