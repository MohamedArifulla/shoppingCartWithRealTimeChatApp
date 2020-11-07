import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {
    path:'',
    component: OrderComponent
  },
  {
    path:'',
    loadChildren: './order-confirmation/order-confirmation.module#OrderConfirmationModule'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
