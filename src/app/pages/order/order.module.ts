import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderComponent } from './order/order.component';
import { OrderService } from './services/order.service';

const routes: Routes = [
  { path: '', component: OrderComponent, },
];

@NgModule({
  declarations: [
    DeliveryCostsComponent,
    OrderItemsComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [OrderService]
})
export class OrderModule { }
