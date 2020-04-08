import { NgModule, ModuleWithProviders } from '@angular/core';
import { InputContanerComponent } from './input-contaner/input-contaner.component';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderService } from './order.service';
import { RestaurantsService } from './restaurants.service';
import { ShoppingCartService } from './shopping-cart.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { AuthInterceptor } from '../security/auth.interceptor';
import { LoggedInGuard } from "../security/loggeding.guard";
import { LeaveOrderGuard } from '../order/leave-order.guard';


@NgModule({
  declarations: [
    InputContanerComponent,
    RatingComponent,
    RadioComponent,
    SnackbarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    InputContanerComponent,
    RatingComponent,
    RadioComponent,
    SnackbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        OrderService,
        RestaurantsService,
        ShoppingCartService,
        NotificationService,
        LoginService,
        AuthInterceptor,
        LoggedInGuard,
        LeaveOrderGuard,
      ]
    };
  }
}
