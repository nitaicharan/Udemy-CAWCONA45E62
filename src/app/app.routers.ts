import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';

export const ROUTES: Routes = [
  { path: 'order', loadChildren: './order/order.module#OrderModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '', component: HomeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'review', component: ReviewsComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];
