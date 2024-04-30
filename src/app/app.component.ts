import { Component } from '@angular/core';
import { MasterService } from './services/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vehicles: any = [];
 
  constructor(private service : MasterService) {}

  ngOnInit() {
 this.vehicles = this.service.GetVehicles();
 console.log(this.vehicles);  
}

}