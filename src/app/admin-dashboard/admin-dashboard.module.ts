import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    ContentComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminDashboardModule { }
