import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmplyeeComponent } from './create-emplyee/create-emplyee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'createemp',component:CreateEmplyeeComponent},
  {path:'updateemp/:id',component:UpdateEmployeeComponent},
  {path:'empdeatils/:id',component:EmployeeDetailsComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
