import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// eslint-disable-next-line import/prefer-default-export
export class AppRoutingModule { }
