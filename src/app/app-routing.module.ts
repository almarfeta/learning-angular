import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";
import {EmployeeOverviewComponent} from "./employee-overview/employee-overview.component";
import {EmployeeContactComponent} from "./employee-contact/employee-contact.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  },
  {
    path: "employees",
    component: EmployeeListComponent
  },
  {
    path: "employees/:id",
    component: EmployeeDetailComponent,
    children: [
      {
        path: "overview",
        component: EmployeeOverviewComponent
      },
      {
        path: "contact",
        component: EmployeeContactComponent
      }
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
