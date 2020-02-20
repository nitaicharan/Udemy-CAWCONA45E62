import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RestaurantDetailRoutingModule } from './restaurant-detail-routing.module';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    RestaurantDetailComponent,
    ShoppingCartComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    RestaurantDetailRoutingModule,
  ],
})
export class RestaurantDetailModule { }
