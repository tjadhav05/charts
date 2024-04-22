import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {faCalendar} from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  model: NgbDateStruct;
  calender = faCalendar;
  constructor() { }

  ngOnInit(): void {
  }
  

}
