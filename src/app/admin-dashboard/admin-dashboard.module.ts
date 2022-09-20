import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
