import { Component, Input, OnInit } from '@angular/core';
import {faArrowUp} from'@fortawesome/free-solid-svg-icons';
import { MasterService } from 'src/app/services/master.service';
import { StastsService } from 'src/app/services/stasts.service';
@Component({
  selector: 'app-new-win',
  templateUrl: './new-win.component.html',
  styleUrls: ['./new-win.component.scss','../style.scss']
})
export class NewWinComponent implements OnInit {
  @Input() vehicle :any;
  @Input() result : any;
  chartData : any [] =[];
  colorData : any [] =[];
 
  title : any [] = [];
  duration = 'previous 30 days';
  upArrow = faArrowUp;
  myResult : any;
  titleObject :any;
  constructor(private service : MasterService, private myServise : StastsService) {
    this.chartData = this.service.GetChartInfo();
    this.colorData = this.service.GetColorCode();
   }
  ngOnInit(): void {
  //  console.log('result ', this.result.business.metrics, typeof(this.result));
    // this.myResult = this.result.business.metrics;
    // const arrayOfObjects = Object.keys(this.myResult).map(key => ({
    //   key,
    //   ...this.myResult[key]
    // }));
    // this.titleObject = arrayOfObjects;
    // console.log(arrayOfObjects[0].key);
    for(let i = 0; i< this.chartData.length; i++){
     this.title [0] = this.chartData[i].vehicle;
     this.title.push(this.chartData[i].vehicle);
    }
  }

}
