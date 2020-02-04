import { NgModule } from "@angular/core";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";
import { SharedModule } from "app/shared/shared.modele";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const ROUTES: Routes = [
  { path: '', component: OrderComponent },
]

@NgModule({
  declarations: [
    DeliveryCostsComponent,
    OrderItemsComponent,
    OrderComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),
    CommonModule
  ],
})
export class OrderModule { }