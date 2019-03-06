import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/order/order.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ProductComponent } from './pages/product/product.component';



const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'order', component: OrderComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'product', component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
