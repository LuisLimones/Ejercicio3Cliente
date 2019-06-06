import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerusuariosComponent } from './componentes/verusuarios/verusuarios.component';
import { DetalleusuarioComponent } from './componentes/detalleusuario/detalleusuario.component';
import { AgregarusuarioComponent } from './componentes/agregarusuario/agregarusuario.component';
import { ActualizarusuarioComponent } from './componentes/actualizarusuario/actualizarusuario.component';
import { NoencontradoComponent } from './componentes/noencontrado/noencontrado.component';

const routes: Routes = [
  {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
  {path: 'usuarios', component: VerusuariosComponent},
  {path: 'agregar', component: AgregarusuarioComponent},
  {path: 'usuario/:id', component: DetalleusuarioComponent},
  {path: 'actualizar/:id', component: ActualizarusuarioComponent},
  {path: '**', component: NoencontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
