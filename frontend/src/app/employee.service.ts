import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="http://localhost:8080/api/employees";
  createUrl="http://localhost:8080/api/employee";

  constructor(private Http:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
        return this.Http.get<Employee[]>(this.baseUrl);
  }

  createEmployee(emp:Employee):Observable<any>{
       return this.Http.post(this.createUrl,emp);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.Http.get<Employee>(this.createUrl+"/"+id);
  }

  updateEmployee(id: number, employee: Employee): Observable<any>{
    return this.Http.put(this.createUrl+"/"+id, employee);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.Http.delete(this.createUrl+"/"+id);
  }
}
