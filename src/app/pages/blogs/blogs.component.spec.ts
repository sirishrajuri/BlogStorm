import { ComponentFixture, TestBed } from '@angular/core/testing';

import { blogsComponent } from './blogs.component';

describe('blogsComponent', () => {
  let component: blogsComponent;
  let fixture: ComponentFixture<blogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [blogsComponent]
    });
    fixture = TestBed.createComponent(blogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
