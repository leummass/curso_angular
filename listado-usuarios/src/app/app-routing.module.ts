import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login-guard.service';

const CanActivateLogin: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(LoginGuard).CanActivateLogin();
};

const routes: Routes = [
  { path: '', component: PersonasComponent, canActivate: [CanActivateLogin] },
  {
    path: 'personas',
    component: PersonasComponent,
    canActivate: [CanActivateLogin],
    children: [
      { path: 'agregar', component: FormularioComponent },
      { path: ':id', component: FormularioComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
