import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from '../shared/restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0x ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {
  searchBarState = 'hidden';
  restaurants: Restaurant[];
  searchControl: FormControl;
  searchForm: FormGroup;

  constructor(private service: RestaurantsService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.service.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl,
    });
    this.searchControl.valueChanges
      .switchMap(searchTerm => this.service.getRestaurants(searchTerm))
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
