import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
		// canActivate: [CanActivateViaAuthGuard]
  },
  {
		path: '',
		redirectTo: '/login', // '/login'
		pathMatch: 'full'
	}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
