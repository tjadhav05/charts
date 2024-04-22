import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRRbyCountryComponent } from './mrrby-country.component';

describe('MRRbyCountryComponent', () => {
  let component: MRRbyCountryComponent;
  let fixture: ComponentFixture<MRRbyCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRRbyCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRRbyCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
