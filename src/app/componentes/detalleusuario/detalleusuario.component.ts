import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.component.html',
  styleUrls: ['./detalleusuario.component.css']
})
export class DetalleusuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute,
    private router: Router) { }
  usuario: Usuario;
  id: string;

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(this.id).subscribe(usuario => this.usuario=usuario);
  }

  eliminar(){
    this.usuarioService.deleteUsuario(this.id).subscribe();
    //this.router.navigateByUrl('/#');
    location.href="/";
    alert("Usuario Eliminado");
  }
}
