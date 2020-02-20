import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: '', component: OrderSummaryComponent },
];

@NgModule({
  declarations: [OrderSummaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class OrderSummaryModule { }
