import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
@Injectable()
export class RestaurantsService {
  private rests: Restaurant[];

  constructor(private http: Http) { }

  getRestaurants = (): Observable<Restaurant[]> =>
    this.http
      .get(`${MEAT_API}`)
      .map(response => response.json().restaurants)
      .catch(ErrorHandler.handleError);


  getRestaurant = (id: string): Observable<Restaurant> =>
    this.http
      .get(`${MEAT_API}`)
      .map(response => response.json().restaurants.find((restaurant: { id: string; }) => restaurant.id === id))
      .catch(ErrorHandler.handleError);
}
