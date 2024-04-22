import { Component, OnInit } from '@angular/core';
import {faArrowUp} from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-new-win',
  templateUrl: './new-win.component.html',
  styleUrls: ['./new-win.component.scss','../style.scss']
})
export class NewWinComponent implements OnInit {
  upArrow = faArrowUp;
  constructor() { }

  ngOnInit(): void {
  }

}
