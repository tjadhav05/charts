import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMRRComponent } from './new-mrr.component';

describe('NewMRRComponent', () => {
  let component: NewMRRComponent;
  let fixture: ComponentFixture<NewMRRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMRRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
