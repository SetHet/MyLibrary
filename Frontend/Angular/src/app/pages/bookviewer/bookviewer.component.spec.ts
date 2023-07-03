import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookviewerComponent } from './bookviewer.component';

describe('BookviewerComponent', () => {
  let component: BookviewerComponent;
  let fixture: ComponentFixture<BookviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookviewerComponent]
    });
    fixture = TestBed.createComponent(BookviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
