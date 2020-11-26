import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]
  constructor(private empservice: EmployeeService,
   private router:Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  private getAllEmployees(){
    this.empservice.getEmployeesList().subscribe(data=>{
      this.employees=data;
      console.log(this.employees);
    })
  }

  onUpdate(id:number){
      this.router.navigate(['updateemp',id]);
  }

  onDelete(id:number){
    this.empservice.deleteEmployee(id).subscribe(data =>{
      this.getAllEmployees();
    });
}

 onDetails(id:number){
   this.router.navigate(['empdeatils',id]);
}
}
