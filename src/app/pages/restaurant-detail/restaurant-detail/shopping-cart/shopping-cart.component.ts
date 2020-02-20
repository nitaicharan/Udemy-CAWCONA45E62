import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
        style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready';

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }

  items = (): any[] => this.service.items;

  total = (): any => this.service.total();

  clear = () => this.service.clear();

  delItem = (item: any) => this.service.removeItem(item);
  addItem = (item: any) => this.service.addItem(item);
}