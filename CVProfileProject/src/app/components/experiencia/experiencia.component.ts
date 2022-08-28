import { Component, OnInit } from '@angular/core';
import { Experiencia1, Experiencia2, Experiencia3 } from 'src/app/models/employee';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia1Array: Experiencia1[] = [
  {id:1, empresa: 'Cw Schelp S.A.C.I.', lugar: '"CABA. Argentina".', cargo: 'Especialista Contable/Administrativo.', fecha: 'Ago. 2018 - Actualidad (4 años 1 mes).',
  funciones:'Manejo del Sistema Bejerman. Análisis de Cuentas. Registro y Análisis de Fondo Fijo y Caja Chica. Manejo y Registro de Importaciones y Despachos. Registro de Comprobantes de Compras y Gastos y Órdenes de Pago. Cancelación de Impuestos Nacionales y anticipos aduaneros a través de medio electrónicos (AFIP, ARBA, AGIP). Confección de información para la declaración Impuesto Varios.Preparación de la Información para el Impuesto de la DDJJ Anual de Ganancias. Gestión de Balance Financiero (Cierre Contable-Estados Financieros Ganancias y Pérdidas). Control; Manejo de Sueldo, Análisis de FIMA, Control de Prestamos; Reportes para gestión de presupuesto de la empresa; elaboración de los informes de bajo VEN-NIF Pymes.'},];
   experiencia2Array: Experiencia2[] = [
  {id:2,empresa: 'Ruiz & Asociados Consultores Tributarios y Financieros.', lugar: '"CABA. Argentina"', cargo: 'Analista Contable.', fecha: 'Mar.2018-Jul.2018.',
  funciones:'Proyecto Empresa Aggreko : Manejo del Sistema Tango, Análisis y control impositivo, contable y financiero.'},];
  experiencia3Array: Experiencia3[] = [
  {id:3,empresa: 'KPMG en Venezuela.', lugar: '"Caracas, Venezuela".', cargo: 'Consultor Senior Asesoria BPO.', fecha: '4 años y 3 meses.',
  funciones:'Preparación y declaración de impuestos mensuales y anuales. Reportes anuales a Casa Matriz, elaboración y revisión de informes financieros bajo VEN-NIF Pymes, NIIF. Elaboración de balance general, estado de ganancias y pérdidas. Análisis de Costo e inventario, estructuras de costo, ajuste de materia prima, ajuste de precio de productos terminados y auxiliares para la realización del presupuesto mensual de la empresa. Ajuste por Inflación (Programa PCC2000).ff'},];

selectedExperiencia1 : Experiencia1 = new Experiencia1();
selectedExperiencia2 : Experiencia2 = new Experiencia2();
selectedExperiencia3 : Experiencia3 = new Experiencia3();

openForEdit1(experiencia1: Experiencia1){
  this.selectedExperiencia1 = experiencia1;
}
openForEdit2( experiencia2: Experiencia2){
  this.selectedExperiencia2 = experiencia2;
}
openForEdit3( experiencia3: Experiencia3){
  this.selectedExperiencia3 = experiencia3;
}

addOrEdit(){
  if(this.selectedExperiencia1.id,this.selectedExperiencia2.id, this.selectedExperiencia3.id === 0)
  this.selectedExperiencia1.id = this.experiencia1Array.length + 1;
  this.selectedExperiencia2.id = this.experiencia2Array.length + 1;
  this.selectedExperiencia3.id = this.experiencia3Array.length + 1;
  this.experiencia1Array.push(this.selectedExperiencia1);
  this.experiencia2Array.push(this.selectedExperiencia2);
  this.experiencia3Array.push(this.selectedExperiencia3);
  this.selectedExperiencia1 = new Experiencia1();
  this.selectedExperiencia2 = new Experiencia2();
  this.selectedExperiencia3 = new Experiencia3();
}

delete(){
  if(confirm("Estas seguro de eliminar?")){
  this.experiencia1Array = this.experiencia1Array.filter(x => x != this.selectedExperiencia1);
  this.experiencia2Array = this.experiencia2Array.filter(x => x != this.selectedExperiencia2);
  this.experiencia3Array = this.experiencia3Array.filter(x => x != this.selectedExperiencia3);
  this.selectedExperiencia1 = new Experiencia1();
  this.selectedExperiencia2 = new Experiencia2();
  this.selectedExperiencia3 = new Experiencia3();
  }
}


  constructor() {

   }

  ngOnInit(): void {
  }

}
