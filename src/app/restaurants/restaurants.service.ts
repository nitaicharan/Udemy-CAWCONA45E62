import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

import { Restaurant } from "./restaurant/restaurant.model";
import { MEAT_API } from "app/app.api";
@Injectable()
export class RestaurantsService {
  private rests: Restaurant[];

  constructor(private http: Http) { }

  getRestaurants = (): Observable<Restaurant[]> => this.http.get(`${MEAT_API}`).map(response => response.json().restaurants);
}
