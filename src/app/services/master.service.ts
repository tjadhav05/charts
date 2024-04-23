import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  

  colorCode = [{
    id: 1,
    catagory: "worst",
    color: "red"
  },{
    id: 2,
    catagory: "good",
    color: "yellow"
  },
  {
    id: 3,
    catagory: "best",
    color: "green"
  },
]
  data2 = [
    {
      vehicle: 'bike',
      quantity: {
        worst :17,
        good : 14,
        best : 2
      },
    },
    {
      vehicle: 'car',
      quantity: {
        worst :10,
        good : 25,
        best : 5
      }
    },{
      vehicle: 'truck',
      quantity: {
        worst :5,
        good : 4,
        best : 9
      }
    },
  ]

  constructor(private http: HttpClient) {}
  GetChartInfo() {
    return this.data2;
  }
  GetColorCode() {
    return this.colorCode;
  }
}
