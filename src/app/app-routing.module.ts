import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
  path: 'admin',
  loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule{}
