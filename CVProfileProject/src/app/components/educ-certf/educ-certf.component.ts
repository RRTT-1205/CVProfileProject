import { Component, OnInit } from '@angular/core';
import { Educ, Certif } from 'src/app/models/employee';

@Component({
  selector: 'app-educ-certf',
  templateUrl: './educ-certf.component.html',
  styleUrls: ['./educ-certf.component.css']
})
export class EducCertfComponent implements OnInit {

  educArray: Educ[] = [
  {id: 1, institution: 'Universidad Alejandro de Humboldt.', fecha:'(2010-2015).', title: 'Accountant.', description: 'Contabilidad y Finanzas.'}
  ];
  certifArray: Certif[] = [
  {id: 1, institution: 'MUMUKI.', fecha:'(Octubre - Diciembre 2021).', title: 'Argentina Programa: #SeProgramar.', description: 'FfPyHnjygdGxCw1U.'}
  ];

  selectedEduc : Educ = new Educ();
  selectedCertif : Certif = new Certif();

openForEdit(educ: Educ){
  this.selectedEduc = educ;
}
openForEdit2(certif: Certif){
  this.selectedCertif = certif;
}

addOrEdit(){
  if(this.selectedCertif.id === 0)
  this.selectedCertif.id = this.certifArray.length + 1;
  this.certifArray.push(this.selectedCertif);

  this.selectedCertif = new Certif();
}
addOrEdit2(){
  if(this.selectedEduc.id === 0)
  this.selectedEduc.id = this.educArray.length + 1;
  this.educArray.push(this.selectedEduc);

  this.selectedEduc = new Educ();
}

delete(){
  if(confirm("Estas seguro de eliminar?")){
  this.educArray = this.educArray.filter(x => x != this.selectedEduc);
  this.selectedEduc = new Educ();
}
}
delete2(){
  if(confirm("Estas seguro de eliminar?")){
  this.certifArray = this.certifArray.filter(x => x != this.selectedCertif);
  this.selectedCertif = new Certif();
}
}

  constructor() { }

  ngOnInit(): void {
  }

}
