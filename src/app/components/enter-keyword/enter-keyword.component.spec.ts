import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterKeywordComponent } from './enter-keyword.component';

describe('EnterKeywordComponent', () => {
  let component: EnterKeywordComponent;
  let fixture: ComponentFixture<EnterKeywordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterKeywordComponent]
    });
    fixture = TestBed.createComponent(EnterKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
