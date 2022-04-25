import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


const routes: Routes = [

  {
    path:' ', 
    redirectTo: '/log-in', pathMatch:'full'
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path:'admin', component: AdminDashboardComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
