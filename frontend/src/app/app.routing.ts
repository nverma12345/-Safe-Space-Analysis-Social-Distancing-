import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StoreDetailComponent } from './components/store-details/store-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //     }
  //   ]
  // }, {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
  //     }
  //   ]
  // },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'admin',   component: UserProfileComponent },
  { path: 'details',   component: StoreDetailComponent },
  { path: 'login',          component: LoginComponent },
  { path: 'register',       component: RegisterComponent }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
