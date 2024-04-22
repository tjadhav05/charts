import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-mrrby-country',
  templateUrl: './mrrby-country.component.html',
  styleUrls: ['./mrrby-country.component.scss']
})
export class MRRbyCountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    const chart = new Chart("Bubble", {
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
          label: 'US',
          backgroundColor: '#0FB6CB',       
      },
      {
        data: [{ x: 400, y: 27, r: 25.6 }, { x: 600, y: 5, r: 15.6 },  { x: 200, y: -5, r: 10.6 }],
        label: 'Austrelia',
        backgroundColor: '#848381',       
    },
   {
      data: [{ x: 100, y: 27, r: 35.6 }, { x: 350, y: -5, r: 15.6 },  { x: 500, y: 15, r: 10.6 }],
      label: 'UK',
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
      }
    });
  }

}
