import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/pages/restaurants/services/restaurants.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private route: ActivatedRoute, private service: RestaurantsService) { }

  ngOnInit() {
    this.reviews = this.service.getReviews(this.route.parent.snapshot.params['id']);
  }
}