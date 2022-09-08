export class Experiencia {
    id? : number;
    nombreE : string;
    ubicacionE : string;
    cargoE : string;
    descripcionE : string;


    constructor(nombreE: string, ubicacionE: string, cargoE: string, descripcionE: string){
        this.nombreE = nombreE;
        this.ubicacionE = ubicacionE;
        this.cargoE = cargoE;
        this.descripcionE = descripcionE;
      }
}
