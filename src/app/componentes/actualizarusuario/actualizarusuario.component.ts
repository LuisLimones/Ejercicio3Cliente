import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-actualizarusuario',
  templateUrl: './actualizarusuario.component.html',
  styleUrls: ['./actualizarusuario.component.css']
})
export class ActualizarusuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router,
    private route: ActivatedRoute) { }

    user: Usuario;
    id: string;

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(this.id).subscribe(usuario => this.user=usuario);
  }

  submitActualizar(){
    this.usuarioService.putUsuario(this.user).subscribe();
    alert("Usuario Actualizado");
    this.router.navigateByUrl('#');
  }

}
