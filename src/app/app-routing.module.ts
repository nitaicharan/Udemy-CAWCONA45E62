import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { RestaurantDetailRoutingModule } from './pages/restaurant-detail/restaurant-detail-routing.module';
import { LoggedInGuard } from './guards/loggeding.guard';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'restaurantes/:id', loadChildren: () => import('./pages/restaurant-detail/restaurant-detail.module').then(m => RestaurantDetailRoutingModule) },
      { path: 'login/:to', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'sobre', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
      { path: 'restaurantes', loadChildren: () => import('./pages/restaurants/restaurants.module').then(m => m.RestaurantsModule) },
      { path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule), canLoad: [LoggedInGuard], canActivate: [LoggedInGuard] },
      { path: 'order-summary', loadChildren: () => import('./pages/order-summary/order-summary.module').then(m => m.OrderSummaryModule) },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
