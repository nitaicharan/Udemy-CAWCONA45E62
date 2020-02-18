import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from './messages/notification.service';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = [];

  constructor(private notificationService: NotificationService) { }

  clear = () => this.items = [];

  addItem(item: MenuItem) {
    const foundItem = this.items.find(mItem => mItem.getMenuItemId() === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`);
  }

  increaseQty = (item: CartItem) => item.quantity += 1;
  decreaseQty(item: CartItem) {
    item.quantity -= 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem = (item: CartItem) => {
    this.items.splice(this.items.indexOf(item), 1);
    this.notificationService.notify(`Você removeu o item ${item.name()}`);
  }

  total = (): number => this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
}
