import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSubmittingComponent } from './book-submitting.component';

describe('BookSubmittingComponent', () => {
  let component: BookSubmittingComponent;
  let fixture: ComponentFixture<BookSubmittingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookSubmittingComponent]
    });
    fixture = TestBed.createComponent(BookSubmittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
