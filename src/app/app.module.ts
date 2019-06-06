import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerusuariosComponent } from './componentes/verusuarios/verusuarios.component';
import { DetalleusuarioComponent } from './componentes/detalleusuario/detalleusuario.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
import { AgregarusuarioComponent } from './componentes/agregarusuario/agregarusuario.component';
import { ActualizarusuarioComponent } from './componentes/actualizarusuario/actualizarusuario.component';
import { UsuarioService } from './servicios/usuario.service';
import { InterceptorUsuarioService } from './interceptores/interceptor-usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    VerusuariosComponent,
    DetalleusuarioComponent,
    NavbarComponent,
    NoencontradoComponent,
    AgregarusuarioComponent,
    ActualizarusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorUsuarioService,
      multi: true
    },
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
