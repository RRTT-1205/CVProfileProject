import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/models/employee';


@Component({
  selector: 'app-profile0',
  templateUrl: './profile0.component.html',
  styleUrls: ['./profile0.component.css']
})
export class Profile0Component implements OnInit {

employeeArray: Employee[] = [
  {id: 1, name: 'Rafael Rodriguez',profession: 'Full Stack Developer Jr y Accountant'},];

selectedEmployee : Employee = new Employee();

openForEdit(employee: Employee){
  this.selectedEmployee = employee;
}

addOrEdit(){
  if(this.selectedEmployee.id === 0)
  this.selectedEmployee.id = this.employeeArray.length + 1;
  this.employeeArray.push(this.selectedEmployee);

  this.selectedEmployee = new Employee();
}

delete(){
  if(confirm("Estas seguro de eliminar?")){
  this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
  this.selectedEmployee = new Employee();
}
}



  constructor() { }

  ngOnInit(): void {

  }
}

