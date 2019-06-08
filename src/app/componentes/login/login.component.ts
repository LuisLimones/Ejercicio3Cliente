import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logeo = {
    correo: '',
    contra: ''
  }

  constructor(private usuarioService: UsuarioService, private router:Router ) { }

  ngOnInit() {
    if (this.usuarioService.logeado()) {
      this.router.navigate(['/usuarios']);
    } 
  }

  submitLogear(){
    this.usuarioService.login(this.logeo).subscribe(response => {
      let token=response.token;
      if(token != null){
        localStorage.setItem('token', token);
        console.log(localStorage.getItem('token'));
        this.router.navigate(['/usuarios']);
      }
      else{
        alert("Usuario O Contraseña Invalidos \nPor Favor Intente De Nuevo");
      }
    });
  }

}
