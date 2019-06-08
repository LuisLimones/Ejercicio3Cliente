import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.component.html',
  styleUrls: ['./agregarusuario.component.css']
})
export class AgregarusuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }
  user: Usuario={
    id: null,
    nombre: null,
    apellidoP: null,
    apellidoM: null,
    correo: null,
    contra: null
  }

  submitAgregar(){
    this.usuarioService.postUsuario(this.user).subscribe();
    location.href= "/";
    alert("Usuario agregado");
  }

}
