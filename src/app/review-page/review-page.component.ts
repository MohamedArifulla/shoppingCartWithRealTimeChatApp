import { Component } from '@angular/core';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent {
  userReview: any = [
    {
      userName: 'Hameed',
      review: 'Amazing store!!!'
    },
    {
      userName: 'Asith',
      review: 'Need to add more items!'
    },
    {
      userName: 'Mathan',
      review: 'Quick delivery!'
    }
  ];
  name: any;
  review: any;
  constructor() { }

  addReview() {
    this.userReview.push({
      userName: this.name,
      review: this.review
    });
    this.name = '';
    this.review = '';
  }

}
