import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {
  private rests: Restaurant[];

  constructor(private http: HttpClient) { }

  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams;
    params = search ? new HttpParams().append('q', search) : params;
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params });
  }

  getRestaurant = (id: string): Observable<Restaurant> => this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);

  getReviews = (id: string): Observable<any> => this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);

  getMenu = (id: string): Observable<MenuItem[]> => this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
}
