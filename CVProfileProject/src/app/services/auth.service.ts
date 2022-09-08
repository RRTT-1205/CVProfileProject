import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { UsuarioNuevo } from '../models/usuario-nuevo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://backendrrt.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: UsuarioNuevo): Observable<any>{
   return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
 }
}
