package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.exception.ResourceNotFoundException;
import com.app.model.Employees;
import com.app.repository.EmployeeRepository;

@RestController
@RequestMapping("/api")
public class EmployeeController {
 @Autowired private EmployeeRepository empRepository;
 
 //get all employees
 @GetMapping("/employees")
 @CrossOrigin(origins = "http://localhost:4200")
 public List<Employees> getAllEmployees(){
	 return empRepository.findAll();
 }
 
 //create new employee
 @PostMapping("/employee")
 @CrossOrigin(origins = "http://localhost:4200")
 public Employees createEmployees(@RequestBody Employees e){
	 return empRepository.save(e);
 }
 
 //get employee by id api
 @GetMapping("/employee/{id}")
 @CrossOrigin(origins = "http://localhost:4200")
 public ResponseEntity<Employees> getEmployeesById(@PathVariable long id) {
	 Employees emp = empRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("employee with given id not found"));
	 return ResponseEntity.ok(emp);
 }
 
 
 //update the employee
 @PutMapping("/employee/{id}")
 @CrossOrigin(origins = "http://localhost:4200")
 public ResponseEntity<Employees> updateEmployee(@PathVariable long id,@RequestBody Employees e){
	 Employees emp = empRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("employee with given id not found"));
	 emp.setFirstName(e.getFirstName());
	 emp.setLastName(e.getLastName());
	 emp.setEmailId(e.getEmailId());
	 Employees updatedemp=empRepository.save(emp);
	 return ResponseEntity.ok(updatedemp);
 }
 
 //delete the employee
 @DeleteMapping("/employee/{id}")
 @CrossOrigin(origins = "http://localhost:4200")
 public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable long id){
	 Employees emp = empRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("employee with given id not found"));
	 empRepository.delete(emp);
	 Map<String,Boolean> res = new HashMap<>();
	 res.put("Deleted sucessfully", Boolean.TRUE);
	 return ResponseEntity.ok(res);
	 
 }
 
 
 
 
}
