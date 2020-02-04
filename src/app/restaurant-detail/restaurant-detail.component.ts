import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/core/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

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
