import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderConfirmationRoutingModule } from './order-confirmation-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [OrderConfirmationComponent],
  imports: [
    CommonModule,
    OrderConfirmationRoutingModule,
    MatButtonModule
  ]
})
export class OrderConfirmationModule { }
