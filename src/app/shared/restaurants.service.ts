import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { MEAT_API } from 'app/app.api';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RestaurantsService {
  private rests: Restaurant[];

  constructor(private http: HttpClient) { }

  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams
    params = search ? new HttpParams().append('q', search) : params;
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params })
  }

  getRestaurant = (id: string): Observable<Restaurant> =>
    this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)

  getReviews = (id: string): Observable<any> =>
    this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)

  getMenu = (id: string): Observable<MenuItem[]> =>
    this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
}
