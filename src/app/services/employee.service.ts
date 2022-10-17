import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Employees } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "Employee";
  constructor(private http: HttpClient) { }

  public getEmployees() : Observable<Employees[]> {
    return this.http.get<Employees[]>(`${environment.apiUrl}/${this.url}`);
  }
}
