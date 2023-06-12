import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  public employees: Employee[] = [];
  public errorMsg: string = "";

  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
          error => this.errorMsg = error);
  }

  onSelect(employee: Employee) {
    this.router.navigate(["/employees", employee.id]);
  }
}
