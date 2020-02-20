import { Injectable } from '@angular/core';
import { CartItem } from '../../pages/restaurant-detail/models/card-item.model';
import { MenuItem } from '../../pages/restaurant-detail/models/menu-item.model';
import { NotificationService } from './notification.service';

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = [];

    constructor(private notificationService: NotificationService) { }

    addItem(item: MenuItem) {
        const foundItem = this.items.find(mItem => mItem.getMenuItemId() === item.id);
        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }

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

    clear = () => this.items = [];
    increaseQty = (item: CartItem) => item.quantity += 1;
    total = (): number => this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
}