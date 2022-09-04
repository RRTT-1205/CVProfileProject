import { Component, OnInit } from '@angular/core';
import {Description} from 'src/app/models/employee';
import {Project} from 'src/app/models/employee';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  descriptionArray: Description[] = [
  {id: 1, description: 'Modalidad Autogestionada.'},
  {id: 2, description: 'Caracteristicas de Logout.'},
  {id: 3, description: 'Botones de Eliminacion.'},
  {id: 4, description: 'Botones de Edicion.'},
  {id: 5, description: 'Funciones Adicionales de Libre Ordenamiento.'}
];
  projectArray: Project[] = [
    {projectname: 'Portfolio Web. ', fecha: 2022}
  ];

selectedDescription : Description = new Description();
selectedProject : Project = new Project();

addOrEdit(){
  if (this.selectedDescription.id === 0){
  this.selectedDescription.id = this.descriptionArray.length + 1;
  this.descriptionArray.push(this.selectedDescription);
  }
  this.selectedDescription = new Description();
}

openForEdit(description: Description){
  this.selectedDescription = description;
}
openForEdit2(project: Project){
  this.selectedProject = project;
}

delete(){
  if(confirm("Estas seguro de eliminar la  descripción?")){
  this.descriptionArray = this.descriptionArray.filter(x => x != this.selectedDescription);
  this.selectedDescription = new Description();
}
}
  constructor() { }

  ngOnInit(): void {
  }

}
