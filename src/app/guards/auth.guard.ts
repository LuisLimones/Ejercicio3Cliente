import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router:Router){}
  canActivate(): boolean{
    console.log("llega canactive")
    if (this.usuarioService.logeado()) {
      return true;
    } else {
      alert("Por Favor Inicie Sesion");
      this.router.navigate(['/login']);
    }
  }
}
