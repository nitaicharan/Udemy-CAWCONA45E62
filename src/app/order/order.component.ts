import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ];

  delivery: number = 8

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue = (): number => this.orderService.itemsValue()
  cartItems = (): CartItem[] => this.orderService.cartItems();
  increaseQty = (item: CartItem) => this.orderService.increaseQty(item)
  decreaseQty = (item: CartItem) => this.orderService.decreaseQty(item)
  remove = (item: CartItem) => this.orderService.remove(item)
  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.getMenuItemId()))
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log(`Compra concluida: ${orderId}`)
      this.orderService.clear()
    })
  }
}
