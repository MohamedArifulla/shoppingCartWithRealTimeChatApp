import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewPageComponent } from '../review-page/review-page.component';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
interface Orders {
  value: string;
  id: number;
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  foods: Orders[] = [
    {value: 'Orange', id: 1},
    {value: 'Apple', id: 2},
    {value: 'Mango', id: 3}
  ];
  selectedValue: any = '';
  orderArray: any = [];
  customerMobile:any;
  customerName:any;
  expectedDate:any;
  constructor(
    public dialog: MatDialog,
    private route: Router,
    private orderService: OrderService
    ) {}

  onAddOrder() {
    let check = true;
    if(this.selectedValue !== '') {      
      if(this.orderArray.length === 0 ) {
        this.orderArray.push(this.selectedValue);
      } else {
        this.orderArray.find((ele:any)=>{
          if(ele === this.selectedValue) {
            check = false;
          }});
          if (check) {
            this.orderArray.push(this.selectedValue);
        } 
      }
    }
  }
  onReviewClick() {
    const dialogRef = this.dialog.open(ReviewPageComponent, {
      width: '250px',
      data: {}
    });
  }
  onSubmit(orderDetails) {
    if (orderDetails.form.status === 'INVALID' && this.orderArray.length === 0) {
      window.alert('Please select all required field!');
    } else {
      this.route.navigate(['order-placed']);
      const orderDetails = {
        orderArray: this.orderArray,
        customerName: this.customerName,
        customerMobile: this.customerMobile,
        expectedDate: this.expectedDate
      }
      this.orderService.getOrderDetails(orderDetails);
    } 
  }  
}
