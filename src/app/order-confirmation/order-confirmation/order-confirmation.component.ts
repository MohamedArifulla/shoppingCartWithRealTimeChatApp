import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ReviewPageComponent } from 'src/app/review-page/review-page.component';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  orderArray: any = [];
  customerName: any;
  customerMobile: any;
  expectedDate: any;

  constructor(
    private orderService: OrderService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.orderService.orderDetails.subscribe((res:any) => {
        this.orderArray= res.orderArray,
        this.customerName= res.customerName,
        this.customerMobile= res.customerMobile,
        this.expectedDate= res.expectedDate
    });
  }
  onReviewClick() {
    const dialogRef = this.dialog.open(ReviewPageComponent, {
      width: '250px',
      data: {}
    });
  }
}
