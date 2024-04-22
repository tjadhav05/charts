import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-mrr',
  templateUrl: './mrr.component.html',
  styleUrls: ['./mrr.component.scss']
})
export class MRRComponent implements OnInit {
  title = 'ng-chart';
  chart: any = [];

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(){

  const myChart = new Chart('piechart',
    {
      type: 'bar',
      data: {
        labels: ['jan-feb','march-april','may-june','july-aug','aug-sep'],
        datasets: [
          {
            data: [20, 60, 60, 50, 60, 70, 40],
            type: 'bar',
            stack:'Stack 0',
            backgroundColor: '#FC8D02',
            hoverBackgroundColor: '#ffa726',
          },
          {
            data: [-10,- 30, 30, 25, 40, 55, 30],
            label: 'Shipment Database',
            type: 'bar',
            stack: 'Stack 0',
            backgroundColor: '#0FB6CB',
            hoverBackgroundColor: '#04cee7',
          },
          {
            data: [10, 30, 30, 25, 20, 15, 10],
            label: 'Failed Shipment Count',
            type: 'bar',
            stack: 'Stack 0',
            backgroundColor: '#848381',
            hoverBackgroundColor: '#848381',
          },
          {
            data: [20, 60, 60, -50, 60, 70, 40],
            label: 'ABC',
            type: 'bar',
            stack:'Stack 0',
            backgroundColor: '#ebbd34',
            hoverBackgroundColor: '#ffa726',
          },
        ],
      
    },
  })
  }
}
