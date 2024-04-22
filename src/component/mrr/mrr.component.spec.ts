import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRRComponent } from './mrr.component';

describe('MRRComponent', () => {
  let component: MRRComponent;
  let fixture: ComponentFixture<MRRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
