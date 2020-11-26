import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;
  employee:Employee=new Employee();
  constructor(private route:ActivatedRoute,
    private empservice:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.empservice.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    })
  }

  onClicks(){
    this.router.navigate(['employees']);
  }

}
