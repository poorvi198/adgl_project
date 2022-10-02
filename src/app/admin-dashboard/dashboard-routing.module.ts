import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {LoginComponent} from '../login/login.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [{
  path: '',
  component: AdminDashboardComponent,
  canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule{}
