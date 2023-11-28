import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseArticleSettingsComponent } from './choose-article-settings.component';

describe('ChooseArticleSettingsComponent', () => {
  let component: ChooseArticleSettingsComponent;
  let fixture: ComponentFixture<ChooseArticleSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseArticleSettingsComponent]
    });
    fixture = TestBed.createComponent(ChooseArticleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
