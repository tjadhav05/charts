import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MRRComponent } from 'src/component/mrr/mrr.component';
import { MRRbyCountryComponent } from 'src/component/mrrby-country/mrrby-country.component';
import { NewWinComponent } from 'src/component/new-win/new-win.component';
import { PageViewComponent } from 'src/component/page-view/page-view.component';
import { WinRateComponent } from 'src/component/win-rate/win-rate.component';
import { NewMRRComponent } from 'src/component/new-mrr/new-mrr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateComponent } from './component/date/date.component';
import { JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    MRRComponent,
    MRRbyCountryComponent,
    NewWinComponent,
    PageViewComponent,
    WinRateComponent,
    NewMRRComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
