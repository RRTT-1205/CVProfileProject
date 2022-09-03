import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://';


  constructor(private http: HttpClient) { }

 /* public getPersona(): Observable<Persona> {
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }*/
}
