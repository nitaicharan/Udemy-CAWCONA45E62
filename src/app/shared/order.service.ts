import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/shared/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from '../order/order.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MEAT_API } from 'app/app.api';
import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) { }

  itemsValue = (): number => this.cartService.total()
  cartItems = (): CartItem[] => this.cartService.items
  increaseQty = (item: CartItem) => this.cartService.increaseQty(item)
  decreaseQty = (item: CartItem) => this.cartService.decreaseQty(item)
  remove = (item: CartItem) => this.cartService.removeItem(item)
  checkOrder(order: Order): Observable<string> {
    let httpHeader = new HttpHeaders();
    if (this.loginService.isLoggedIn()) {
      httpHeader = httpHeader.set('Authorization', `Bearer ${this.loginService.getToken()}`);
    }
    return this.http.post<Order>(`${MEAT_API}/orders`, order, { headers: httpHeader }).map(order => order.id)
  }
  clear = () => this.cartService.clear()
}
