import { Component } from '@angular/core';
import { MasterService } from './services/master.service';
import { StastsService } from './services/stasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vehicles: any = [];
  charttypes: any = [];
  result : any = [];
 // productList: [] = [];
  constructor(private service : MasterService, private myServise : StastsService) {}

ngOnInit() {
 this.vehicles = this.service.GetVehicles();
 this.charttypes = this.service.GetChartType();
 this.result = this.myServise.GetResults();
 console.log(this.charttypes);  
}

productList =[
  {id:1 , name: 'TV' ,price: 450000 },
  {id:2 , name: 'mobile' ,price: 450000 },
  {id:3 , name: 'laptop' ,price: 450000 },
  {id:4 , name: 'AC' ,price: 450000 },
];

salesList =[
  {id:1 , name: 'Test1' ,price: 450000 },
  {id:2 , name: 'test2' ,price: 450000 },
  {id:3 , name: 'test3' ,price: 450000 },
  {id:4 , name: 'test4' ,price: 450000 },
];

}