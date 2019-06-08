import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  url: string="http://localhost:3333/usuarios";
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url + '/todos');
  }

  postUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url+'/nuevo', usuario, this.httpOptions);
  }

  getUsuario(id: string): Observable<Usuario>{
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  deleteUsuario(id: string){
    return this.http.delete<Usuario>(this.url+'/eliminar/'+id, this.httpOptions);
  }

  putUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.url + '/actualizar/' + usuario.id, usuario, this.httpOptions);
  }

  login(data):Observable<any>{
    return this.http.post<any>(this.url + '/login', data);
  }

  logout(){
    localStorage.removeItem('token');
    location.assign("/login");
  }

  logeado(){
    console.log("llega logeado en service")
    return !!localStorage.getItem('token');
  }
}
