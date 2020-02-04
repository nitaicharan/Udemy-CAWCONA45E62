import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/core/restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private route: ActivatedRoute, private service: RestaurantsService) { }

  ngOnInit() {
    this.reviews = this.service.getReviews(this.route.parent.snapshot.params['id']);
  }
}
