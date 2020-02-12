import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from '../shared/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private service: RestaurantsService) {
  }

  ngOnInit() {
    this.service.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
