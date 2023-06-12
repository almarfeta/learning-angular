import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  public employeeId: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // this.employeeId = parseInt(<string>this.route.snapshot.paramMap.get("id"));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.employeeId = parseInt(<string>params.get("id"));
    });
  }

  showOverview() {
    this.router.navigate(["overview"], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(["contact"], {relativeTo: this.route});
  }
}
