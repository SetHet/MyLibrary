import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardocComponent } from './angulardoc.component';

describe('AngulardocComponent', () => {
  let component: AngulardocComponent;
  let fixture: ComponentFixture<AngulardocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngulardocComponent]
    });
    fixture = TestBed.createComponent(AngulardocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
