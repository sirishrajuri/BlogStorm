import { ComponentFixture, TestBed } from '@angular/core/testing';

import { modesComponent } from './modes.component';

describe('modesComponent', () => {
  let component: modesComponent;
  let fixture: ComponentFixture<modesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [modesComponent]
    });
    fixture = TestBed.createComponent(modesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
