import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MRRbyCountryComponent } from 'src/component/mrrby-country/mrrby-country.component';
import { NewWinComponent } from 'src/component/new-win/new-win.component';
import { PageViewComponent } from 'src/component/page-view/page-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateComponent } from './component/date/date.component';
import { JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MRRComponent } from 'src/component/mrr/mrr.component';
import { ProductWidgetComponent } from './product-widget/product-widget.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MRRbyCountryComponent,
    NewWinComponent,
    PageViewComponent,
    DateComponent,
    MRRComponent,
    ProductWidgetComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
