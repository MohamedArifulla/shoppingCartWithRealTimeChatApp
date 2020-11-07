import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orderDetails: BehaviorSubject<any>;
  constructor() { 
    this.orderDetails = new BehaviorSubject(null) as BehaviorSubject<any>;
  }

  getOrderDetails(orderDetails) {
    this.orderDetails.next(orderDetails);
  }
}
