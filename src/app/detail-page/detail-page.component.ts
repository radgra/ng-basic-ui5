import { IEmployee } from './../models/IEmployee';
import { EmployeesService } from './../employees.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent implements OnInit {
  employee$:Observable<IEmployee>
  constructor(private route:ActivatedRoute, private employeesService:EmployeesService) { }

  ngOnInit() {
    this.employee$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap) => {
        const id = params.get('employeeId')
        return this.employeesService.getEmployee(+id)
      })  
    )
  }

}
