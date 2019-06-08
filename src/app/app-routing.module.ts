import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerusuariosComponent } from './componentes/verusuarios/verusuarios.component';
import { DetalleusuarioComponent } from './componentes/detalleusuario/detalleusuario.component';
import { AgregarusuarioComponent } from './componentes/agregarusuario/agregarusuario.component';
import { ActualizarusuarioComponent } from './componentes/actualizarusuario/actualizarusuario.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';
import { LoginComponent} from './componentes/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'usuarios', component: VerusuariosComponent, canActivate: [AuthGuard]},
  {path: 'agregar', component: AgregarusuarioComponent, canActivate: [AuthGuard]},
  {path: 'usuario/:id', component: DetalleusuarioComponent, canActivate: [AuthGuard]},
  {path: 'actualizar/:id', component: ActualizarusuarioComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NoencontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
