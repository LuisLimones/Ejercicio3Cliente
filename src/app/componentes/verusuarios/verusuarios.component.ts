import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verusuarios',
  templateUrl: './verusuarios.component.html',
  styleUrls: ['./verusuarios.component.css']
})
export class VerusuariosComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios=usuarios);
  }

}
