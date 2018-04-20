import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainchatComponent } from './components/mainchat/mainchat.component';
import { GuestGuard } from './auth/guest.guard';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [GuestGuard]
	},
	{
		path: 'signup',
		component: SignupComponent,
		canActivate: [GuestGuard]
	},
	{
		path: 'main',
		component: MainchatComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '',
		redirectTo: '/main', // '/login'
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/main', // '/login'
		pathMatch: 'full'
	}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
