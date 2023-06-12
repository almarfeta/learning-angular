import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeService} from "./employee.service";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
