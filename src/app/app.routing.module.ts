import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from './auth/auth.guard';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }