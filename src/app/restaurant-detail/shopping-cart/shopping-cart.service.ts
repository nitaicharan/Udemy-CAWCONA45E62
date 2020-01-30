import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
  items: CartItem[] = [];

  constructor() { }

  clear = () => this.items = [];

  addItem(menuItem: MenuItem) {
    let foundItem = this.items.find(item => item.getMenuItemId() === menuItem.id)
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1.
    } else {
      this.items.push(new CartItem(menuItem));
    }
  }

  removeItem = (item: CartItem) => this.items.splice(this.items.indexOf(item), 1);
  total = (): number => this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
}
