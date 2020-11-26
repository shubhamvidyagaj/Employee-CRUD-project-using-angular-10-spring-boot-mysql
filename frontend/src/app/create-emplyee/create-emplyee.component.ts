import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-emplyee',
  templateUrl: './create-emplyee.component.html',
  styleUrls: ['./create-emplyee.component.css']
})
export class CreateEmplyeeComponent implements OnInit {

  constructor(private empservice: EmployeeService,
    private router:Router) { }
  employee:Employee=new Employee();
  ngOnInit(): void {
  }

  onSubmit(){
      this.empservice.createEmployee(this.employee).subscribe(data=>{
        console.log(data);
      },error=>{
          console.log(error);
      });
    
      setInterval(() => {
        this.router.navigate(['/employees']);
      }, 2000);
      

  }

}
