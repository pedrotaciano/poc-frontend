import { Component } from '@angular/core';
import { Employees } from './models/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PocFront';
  employees: Employees[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() : void {
    this.employeeService
    .getEmployees()
    .subscribe((result: Employees[]) => (this.employees = result));
  }
}
