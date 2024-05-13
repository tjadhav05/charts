import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { MasterService } from 'src/app/services/master.service';
import { Dataset } from 'src/app/dataset';
Chart.register(...registerables);

@Component({
  selector: 'app-mrrby-country',
  templateUrl: './mrrby-country.component.html',
  styleUrls: ['./mrrby-country.component.scss'],
})
export class MRRbyCountryComponent implements OnInit {
  chartData: any;
  labelData: any[] = [];
  readData: any[] = [];
  colorData: any;
  dataset: any = new Array();
  dataSetNew: any = [];
  data: Dataset[] = [];
  test: any[] = [];
  dataOne: any;
  bubbleChartData: any;
  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.dataSetNew = [];
    this.data = [];
    this.chartData = this.service.GetChartInfo();
    this.colorData = this.service.GetColorCode();
    //this.bubbleChartData = this.service.GetBubbleChartData();

    if (this.chartData) {
       for (let i = 0; i < this.chartData.length; i++) {
        this.data[i] = {
          x: this.chartData[i]['quantity']['total'],
          y: this.chartData[i]['quantity']['good'],
          r: 10,
        };
        this.dataset[i] = {
          label: this.chartData[i].vehicle,
          data: this.data,
          backgroundColor: this.colorData[i].color,
        };
      }
    }

    this.createChart(this.dataset);
  }
  createChart(dataset: any) {
    const chart = new Chart('Bubble', {
      type: 'bubble',
      data: {
              datasets: [
                {
                  data: [{ x: 100, y: 7, r: 5.6 }, { x: 600, y: -5, r: 15.6 },  { x: 200, y: 15, r: 10.6 }],
                  label: 'Canada',
                  backgroundColor: '#FC8D02',
              },
              {
                data: [{ x: 600, y: 17, r: 5.6 }, { x: 50, y: -5, r: 15.6 },  { x: 200, y: 25, r: 10.6 }],
                label: 'truck',
                backgroundColor: '#0FB6CB',
            },
            {
              data: [{ x: 400, y: 27, r: 25.6 }, { x: 600, y: 5, r: 15.6 },  { x: 200, y: -5, r: 10.6 }],
              label: 'car',
              backgroundColor: '#848381',
          },
         {
            data: [{ x: 100, y: 27, r: 35.6 }, { x: 350, y: -5, r: 15.6 },  { x: 500, y: 15, r: 10.6 }],
            label: 'bike',
            backgroundColor: '#ebbd34',
        },
            ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: false,
            text: 'Population by Species Over Time',
            font: { size: 16, weight: 'bold' },
          },
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: false,
              text: 'Year',
              font: { size: 14, weight: 'bold' },
            },
          },
          y: {
            type: 'linear',
            position: 'left',
          },
        },
      },
    });
  }
}
