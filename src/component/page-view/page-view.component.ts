import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {
  title = 'ng-chart';
  chart: any = [];

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(){
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
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
