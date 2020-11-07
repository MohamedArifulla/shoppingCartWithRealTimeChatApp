import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';


const routes: Routes = [
  {
    path:'order-placed',
    component: OrderConfirmationComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderConfirmationRoutingModule { }
