import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { guestGuard } from '../../core/guards/guest.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [guestGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [guestGuard]
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

