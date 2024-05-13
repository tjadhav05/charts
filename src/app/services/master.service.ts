import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  colorCode: any[] = [
    {
      id: 1,
      catagory: 'worst',
      color: '#FC8D02',
    },
    {
      id: 2,
      catagory: 'good',
      color: '#36A2EB',
    },
    {
      id: 3,
      catagory: 'best',
      color: '#FFCE56',
    },
  ];
  data2: any[] = [
    { 
      id: 1,
      vehicle: 'bike',
      quantity: {
        worst: 17,
        good: 14,
        best: 2,
        total: 33,
      },
    },
    {
      id: 2,
      vehicle: 'car',
      quantity: {
        worst: 10,
        good: 25,
        best: 5,
        total: 30,
      },
    },
    {
      id: 3,
      vehicle: 'truck',
      quantity: {
        worst: 5,
        good: 4,
        best: 9,
        total: 18,
      },
    },
  ];

  vehicles = [{
    name: 'Truck',
    color: 'Red',
    sale: 15689,
    year: 2024,
    type : ''
  },
  {
    name: 'Train',
    color: 'Red',
    sale: 352,
    year: 2024,
    type: 'currensy'
  },
  {
    name: 'Bus',
    color: 'Red',
    sale: 5234,
    year: 2024,
    type: 'percent'
  },
 ];

 data = [
  {
    name: 'Bus',
    sales : [
      {
      year :2010,
      country : {
        India : 1000,
        US : 1500,
        UK : 500
      }
    },
    {
      year :2011,
      country : {
        India : 1000,
        US : 1500,
        UK : 500
      }
    },
    {
      year :2012,
      country : {
        India : 1000,
        US : 1500,
        UK : 500
      }
    },
 ]
},
{
  name: 'Truck',
  sales : [
    {
    year :2010,
    country : {
      India : 1000,
      US : 1500,
      UK : 500
    }
  },
  {
    year :2011,
    country : {
      India : 1000,
      US : 1500,
      UK : 500
    }
  },
  {
    year :2012,
    country : {
      India : 1000,
      US : 1500,
      UK : 500
    }
  },
]
},
{
  name: 'Car',
  sales : [
    {
    year :2010,
    country : {
      India : 1000,
      US : 1500,
      UK : 500
    }
  },
  {
    year :2011,
    country : {
      India : 1000,
      US : 1500,
      UK : 500
    }
  },
  {
    year :2012,
    country : {
      India : 1000,
      US : 1500,
      UK : 500
    }
  },
]
}
];

 chartType = [
  {name : 'piechart', type: 'bar'},
  {name : 'piechart', type: 'bar'},
  // {name : 'Bubble',type: 'bubble'},
   ];

  constructor(private http: HttpClient) {}
  GetChartInfo() {
    return this.data2;
  }
  GetColorCode() {
    return this.colorCode;
  }
  GetVehicles(){
    return this.vehicles;
  } 
  GetChartType(){
    return this.chartType;
  }
  GetData(){
    return this.data;
  }  
}

