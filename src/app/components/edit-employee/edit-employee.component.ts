import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee?: Employee;
  @Output() employeesUpdated = new EventEmitter<Employee[]>();

  show: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  toggleShow() {
    this.show = !this.show;
  }

  updateEmployee(employee:Employee) {
    this.employeeService
    .updateEmployee(employee)
    .subscribe((employees: Employee[]) => this.employeesUpdated.emit(employees));
  }

  deleteEmployee(employee:Employee) {
    this.employeeService
    .deleteEmployee(employee)
    .subscribe((employees: Employee[]) => this.employeesUpdated.emit(employees));
  }

  createEmployee(employee:Employee) {
    this.employeeService
    .createEmployee(employee)
    .subscribe((employees: Employee[]) => this.employeesUpdated.emit(employees));
  }
}
