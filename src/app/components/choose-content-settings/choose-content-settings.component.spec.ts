import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseContentSettingsComponent } from './choose-content-settings.component';

describe('ChooseContentSettingsComponent', () => {
  let component: ChooseContentSettingsComponent;
  let fixture: ComponentFixture<ChooseContentSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseContentSettingsComponent]
    });
    fixture = TestBed.createComponent(ChooseContentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
