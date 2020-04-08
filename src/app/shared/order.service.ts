
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../order/order.model';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { LoginService } from '../security/login/login.service';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) { }

  itemsValue = (): number => this.cartService.total();
  cartItems = (): CartItem[] => this.cartService.items;
  increaseQty = (item: CartItem) => this.cartService.increaseQty(item);
  decreaseQty = (item: CartItem) => this.cartService.decreaseQty(item);
  remove = (item: CartItem) => this.cartService.removeItem(item);
  checkOrder = (order: Order): Observable<string> => this.http.post<Order>(`${environment.api}/orders`, order).pipe(map((o: Order) => o.id));
  clear = () => this.cartService.clear();
}
