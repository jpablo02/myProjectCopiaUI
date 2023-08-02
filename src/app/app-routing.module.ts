import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloSeguridadComponent } from './modulo-seguridad/modulo-seguridad.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'inicio-sesion', component: ModuloSeguridadComponent },
  { path: 'pagina-principal', component: PaginaPrincipalComponent, canActivate: [AuthGuard] },
  // Otras rutas de tu aplicación
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
