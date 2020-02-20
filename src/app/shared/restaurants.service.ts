import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {
  private rests: Restaurant[];

  constructor(private http: HttpClient) { }

  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams;
    params = search ? new HttpParams().append('q', search) : params;
    return this.http.get<Restaurant[]>(`${environment.api}/restaurants`, { params });
  }

  getRestaurant = (id: string): Observable<Restaurant> => this.http.get<Restaurant>(`${environment.api}/restaurants/${id}`);

  getReviews = (id: string): Observable<any> => this.http.get(`${environment.api}/restaurants/${id}/reviews`);

  getMenu = (id: string): Observable<MenuItem[]> => this.http.get<MenuItem[]>(`${environment.api}/restaurants/${id}/menu`);
}
