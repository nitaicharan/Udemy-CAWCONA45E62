import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginService } from '../../../core/services/login.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart.service';
import { CartItem } from '../../restaurant-detail/models/card-item.model';
import { Order } from '../models/order.model';

@Injectable()
export class OrderService {
  constructor(private shoppingCartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) { }

  itemsValue = (): number => this.shoppingCartService.total();
  cartItems = (): CartItem[] => this.shoppingCartService.items;
  increaseQty = (item: CartItem) => this.shoppingCartService.increaseQty(item);
  decreaseQty = (item: CartItem) => this.shoppingCartService.decreaseQty(item);
  remove = (item: CartItem) => this.shoppingCartService.removeItem(item);
  checkOrder = (order: Order): Observable<string> => this.http.post<Order>(`${environment.api}/orders`, order).pipe(map((o: Order) => o.id));
  clear = () => this.shoppingCartService.clear();
}
