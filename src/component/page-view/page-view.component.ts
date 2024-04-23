import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
import { MasterService } from 'src/app/services/master.service';

Chart.register(...registerables);

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  title = 'ng-chart';
  dataSet: any = [];
  chartData: any;
  labelData: any[] = [];
  colorData: any;
  backgroundColor:any =[] 

  constructor(private service : MasterService) { }

  ngOnInit(): void {
    this.chartData = this.service.GetChartInfo();
    this.colorData = this.service.GetColorCode();
    if (this.chartData) {
      for (let i = 0; i < this.chartData.length; i++) {
        this.backgroundColor.push(this.colorData[i].color);
        this.labelData.push(this.chartData[i].vehicle);
        this.dataSet[i] = this.chartData[i]['quantity']['total'];
      }
    }
    console.log(this.dataSet);
    this.renderChart(this.labelData,this.backgroundColor,this.dataSet);
  }

  renderChart(labelData:any,backgroundColor:any,dataSet:any){
    const data = {
      labels: labelData,
      datasets: [{
        label: 'My First Dataset',
        data: dataSet,
        backgroundColor: backgroundColor,
        hoverOffset: 4
      }]
    };
  const myChart = new Chart('pie',
    {
      type: 'doughnut',
      data: data
  })
  }

}
