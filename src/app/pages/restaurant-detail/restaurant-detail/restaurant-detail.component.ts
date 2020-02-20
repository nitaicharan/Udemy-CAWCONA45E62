import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/pages/restaurants/models/restaurant.model';
import { RestaurantsService } from '../../restaurants/services/restaurants.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute, private service: RestaurantsService) { }

  ngOnInit() {
    this.service
      .getRestaurant(this.route.snapshot.paramMap.get('id'))
      .subscribe(restaurant => this.restaurant = restaurant);
  }
}
