import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: Http) { }

  itemsValue = (): number => this.cartService.total()
  cartItems = (): CartItem[] => this.cartService.items
  increaseQty = (item: CartItem) => this.cartService.increaseQty(item)
  decreaseQty = (item: CartItem) => this.cartService.decreaseQty(item)
  remove = (item: CartItem) => this.cartService.removeItem(item)
  checkOrder(order: Order): Observable<string> {
    const headers = new Headers
    headers.append('Content-Type', 'application/json')
    return this.http.post(
      `${MEAT_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers }))
      .map(response => response.json())
  }
  clear = () => this.cartService.clear()
}
