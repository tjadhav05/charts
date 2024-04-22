import { Component, OnInit } from '@angular/core';
import {faPercent} from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-win-rate',
  templateUrl: './win-rate.component.html',
  styleUrls: ['./win-rate.component.scss','../style.scss']
})
export class WinRateComponent implements OnInit {
  percent = faPercent;

  constructor() { }

  ngOnInit(): void {
  }

}
