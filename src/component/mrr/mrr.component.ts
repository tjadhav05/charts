import { Component, Input, OnInit } from '@angular/core';
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
  
  @Input() charttype :any;
  title = 'ng-chart';
  chartData: any;
  labelData: any[] = [];
  readData: any[] = [];
  colorData: any;
  id : any;
  dataset: any = new Array();
  dataSetNew: any = [];
  myData : any[] = [];
  myDataSet: any ;

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.id = this.service.GetChartType();
    this.dataSetNew = [];
    this.myData = [];
    this.myData = this.service.GetData();
    this.chartData = this.service.GetChartInfo();
    this.colorData = this.service.GetColorCode();

    console.log(this.chartData);
    
    if (this.chartData) {
      for (let i = 0; i < this.chartData.length; i++) {
    //    this.myDataSet[i] = this.myData[i];
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
    console.log(this.myDataSet);
    this.renderChart(this.labelData,this.dataset);
  }

  renderChart(labelData: any, dataset:any) {
    const myChart = new Chart('id.name', {
      type: this.id.type,
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