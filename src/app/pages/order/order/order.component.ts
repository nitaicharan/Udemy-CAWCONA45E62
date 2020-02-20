import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order, OrderItem } from 'src/app/pages/order/models/order.model';
import { OrderService } from 'src/app/pages/order/services/order.service';
import { CartItem } from 'src/app/pages/restaurant-detail/models/card-item.model';
import { RadioOption } from 'src/app/shared/models/radio-option.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;
  orderId: string;
  delivery = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ];


  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {
      validator: (group: AbstractControl): { [key: string]: boolean } => {
        const email = group.get('email');
        const emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) return undefined;
        if (email.value !== emailConfirmation.value) return { emailsNotMatch: true };
        return undefined;
      }
    });
  }

  itemsValue = (): number => this.orderService.itemsValue();
  cartItems = (): CartItem[] => this.orderService.cartItems();
  increaseQty = (item: CartItem) => this.orderService.increaseQty(item);
  decreaseQty = (item: CartItem) => this.orderService.decreaseQty(item);
  remove = (item: CartItem) => this.orderService.remove(item);
  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.getMenuItemId()));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      this.orderService.clear();
    });
  }
  isOrderNotCompleted = (): boolean => this.orderId === undefined;
}
