import { Injectable } from '@angular/core';
import { Order } from '../order/order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../security/login/login.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) { }

  itemsValue = (): number => this.cartService.total();
  cartItems = (): CartItem[] => this.cartService.items;
  increaseQty = (item: CartItem) => this.cartService.increaseQty(item);
  decreaseQty = (item: CartItem) => this.cartService.decreaseQty(item);
  remove = (item: CartItem) => this.cartService.removeItem(item);
  checkOrder = (order: Order): Observable<string> => this.http.post<Order>(`${MEAT_API}/orders`, order).pipe(map((o: Order) => o.id));
  clear = () => this.cartService.clear();
}
