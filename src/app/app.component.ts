import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PocFront';
  employees: Employee[] = [];
  employeeToEdit?: Employee;
  loading: boolean = true;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() : void {
    this.employeeService
    .getEmployee()
    .subscribe((result: Employee[]) => (this.employees = result));

    this.loading = false;
  }

  updateEmployeeList(employees: Employee[]) {
    this.employees = employees;
  }

  initNewEmployee() {
    this.employeeToEdit = new Employee();
  }

  editEmployee(employee: Employee) {
    this.employeeToEdit = employee;
  }
}
