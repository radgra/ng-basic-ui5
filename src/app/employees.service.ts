import { IEmployee } from './models/IEmployee';
import { employeesData } from './employees';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees:IEmployee[] = employeesData
  
  constructor() { }

  getEmployees() {
    return of(this.employees)
  }

  getEmployee(id:number) {
    const emp = this.employees.find(e => e.EmployeeID === id)
    return of(emp)
  }
}
