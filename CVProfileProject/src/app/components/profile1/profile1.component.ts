import { Component, OnInit } from '@angular/core';
import {Acercade} from 'src/app/models/employee';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.css']
})
export class Profile1Component implements OnInit {
  acercadeArray: Acercade[] = [
  {id: 1, detalle: "Recibido de Contaduría Pública con más de ocho años de experiencia en el área, con dominio amplio de consultoría contable, auditoria (Interna), ajuste por inflación y procesos tributarios. Conocimiento de normas contables US GAAP, IFRS, SOX, NIIF y normas locales (Argentina y Venezuela). Liderazgo de equipo y manejo de procedimientos financieros y administrativos...Desarrollador Full Stack Junior en entrenamiento"},];
  selectedAcercade : Acercade = new Acercade();

openForEdit(acercade: Acercade){
  this.selectedAcercade = acercade;
}

addOrEdit(){
  if(this.selectedAcercade.id === 0)
  this.selectedAcercade.id = this.acercadeArray.length + 1;
  this.acercadeArray.push(this.selectedAcercade);

  this.selectedAcercade = new Acercade();
}

delete(){
  if(confirm("Estas seguro de eliminar detalle?")){
  this.acercadeArray = this.acercadeArray.filter(x => x != this.selectedAcercade);
  this.selectedAcercade = new Acercade();
}
}
  constructor() {

   }

  ngOnInit(): void {
  }

}

