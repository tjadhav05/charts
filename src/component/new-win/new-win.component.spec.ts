import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWinComponent } from './new-win.component';

describe('NewWinComponent', () => {
  let component: NewWinComponent;
  let fixture: ComponentFixture<NewWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
