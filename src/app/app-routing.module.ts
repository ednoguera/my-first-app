import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { PreRegisterFormComponent } from './pre-register-form/pre-register-form.component';

const routes: Routes = [
  {
    path: 'register',
    component: LoginFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'last-chance',
    component: PreRegisterFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// eslint-disable-next-line import/prefer-default-export
export class AppRoutingModule { }
