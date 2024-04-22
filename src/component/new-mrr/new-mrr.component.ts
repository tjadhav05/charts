import { Component, OnInit } from '@angular/core';
import {faArrowUp} from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-new-mrr',
  templateUrl: './new-mrr.component.html',
  styleUrls: ['./new-mrr.component.scss','../style.scss']
})
export class NewMRRComponent implements OnInit {

  upArrow = faArrowUp;
  constructor() { }

  ngOnInit(): void {
  }

}
