import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  

  colorCode:any[] = [{
    id: 1,
    catagory: "worst",
    color: "#FC8D02"
  },{
    id: 2,
    catagory: "good",
    color: "#36A2EB"
  },
  {
    id: 3,
    catagory: "best",
    color: "#FFCE56"
  },
]
  data2: any[] = [
    {
      vehicle: 'bike',
      quantity: {
        worst :17,
        good : 14,
        best : 2,
        total : 33
      },
    },
    {
      vehicle: 'car',
      quantity: {
        worst :10,
        good : 25,
        best : 5,
        total : 30
      }
    },{
      vehicle: 'truck',
      quantity: {
        worst :5,
        good : 4,
        best : 9,
        total : 18
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
