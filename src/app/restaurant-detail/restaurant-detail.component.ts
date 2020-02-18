import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from '../shared/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private route: ActivatedRoute, private service: RestaurantsService) { }

  ngOnInit() {
    this.service.getRestaurant(this.route.snapshot.paramMap.get('id')).subscribe(restaurant => this.restaurant = restaurant);
  }
}
