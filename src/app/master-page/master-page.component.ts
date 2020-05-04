import { EmployeesService } from './../employees.service';
import { IEmployee } from './../models/IEmployee';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit {
  employees$:Observable<IEmployee[]>
  constructor(private employeeService:EmployeesService) { }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees()
  }

}
