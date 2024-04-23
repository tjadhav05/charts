import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Observable } from 'rxjs';
import { Dataset } from 'src/app/dataset';
import { MasterService } from 'src/app/services/master.service';
Chart.register(...registerables);
@Component({
  selector: 'app-mrr',
  templateUrl: './mrr.component.html',
  styleUrls: ['./mrr.component.scss'],
  providers: [MasterService],
})
export class MRRComponent implements OnInit {
  title = 'ng-chart';
  chartData: any;
  labelData: any[] = [];
  readData: any[] = [];
  colorData: any;

  dataset: any = new Array();
  dataSetNew: any = [];
  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.dataSetNew = [];
    this.chartData = this.service.GetChartInfo();
    this.colorData = this.service.GetColorCode();
    if (this.chartData) {
      for (let i = 0; i < this.chartData.length; i++) {
        // Data formatted
        this.dataSetNew[i] = this.chartData[i]['quantity'][this.colorData[i].catagory];
        this.labelData.push(this.chartData[i].vehicle);
        this.dataset[i] = {'label' : this.colorData[i].catagory, 
                          'data' :   this.dataSetNew, 
                           'type' :  'bar', 
                           'backgroundColor' : this.colorData[i].color
                          }
      }
    }
    this.renderChart(this.labelData,this.dataset);
  }

  renderChart(labelData: any, dataset:any) {
    const myChart = new Chart('piechart', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: dataset
      },
      options:  { 
        plugins: { 
            title: { 
                display: true, 
                text: 'Stacked Bar chart for pollution status' 
            }, 
        }, 
        scales: { 
            x: { 
                stacked: true, 
            }, 
            y: { 
                stacked: true 
            } 
        } 
    } 
    });
  }
}
