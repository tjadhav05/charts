import { Component, Input, OnInit } from '@angular/core';
import {faArrowUp} from'@fortawesome/free-solid-svg-icons';
import { MasterService } from 'src/app/services/master.service';
@Component({
  selector: 'app-new-win',
  templateUrl: './new-win.component.html',
  styleUrls: ['./new-win.component.scss','../style.scss']
})
export class NewWinComponent implements OnInit {
  @Input() vehicle :any;
  chartData : any [] =[];
  colorData : any [] =[];
 
  title : any [] = [];
  duration = 'previous 30 days';
  upArrow = faArrowUp;
  
  constructor(private service : MasterService) {
    this.chartData = this.service.GetChartInfo();
    this.colorData = this.service.GetColorCode();
   }
  ngOnInit(): void {
    console.log('vehicle ', this.vehicle.name, typeof(this.vehicle));
  //   for(let i = 0; i< this.chartData.length; i++){
  // //    title [0] = this.chartData[i].vehicle;
  //     this.title.push(this.chartData[i].vehicle);
  //     console.log(this.title);
  //     console.log('vehicle ', this.vehicle);
  //   }
  }

}
