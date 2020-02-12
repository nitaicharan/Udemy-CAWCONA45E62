import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from "../restaurants/restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";
@Injectable()
export class RestaurantsService {
  private rests: Restaurant[];

  constructor(private http: Http) { }

  getRestaurants(search?: string): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}restaurants`, { params: { q: search } })
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  getRestaurant = (id: string): Observable<Restaurant> =>
    this.http.get(`${MEAT_API}restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  getReviews = (id: string): Observable<any> =>
    this.http.get(`${MEAT_API}restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)

  getMenu = (id: string): Observable<MenuItem[]> =>
    this.http.get(`${MEAT_API}restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
}
