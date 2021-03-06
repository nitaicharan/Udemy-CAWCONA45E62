import { MenuItem } from './menu-item.model';

export class CartItem {
    constructor(public menuItem: MenuItem, public quantity: number = 1) { }
    getMenuItemId = () => this.menuItem.id;
    value = (): number => this.menuItem.price * this.quantity;
    name = (): string => this.menuItem.name;
    description = (): string => this.menuItem.description;
}