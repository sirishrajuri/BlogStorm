import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkedComponent } from './bookmarked.component';

describe('BookmarkedComponent', () => {
  let component: BookmarkedComponent;
  let fixture: ComponentFixture<BookmarkedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkedComponent]
    });
    fixture = TestBed.createComponent(BookmarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
