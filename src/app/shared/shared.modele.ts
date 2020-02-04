import { NgModule, ModuleWithProviders, LOCALE_ID } from "@angular/core";
import { InputContanerComponent } from "./input-contaner/input-contaner.component";
import { RatingComponent } from "./rating/rating.component";
import { RadioComponent } from "./radio/radio.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { OrderService } from "./order.service";
import { RestaurantsService } from "./restaurants.service";
import { ShoppingCartService } from "./shopping-cart.service";


@NgModule({
  declarations: [
    InputContanerComponent,
    RatingComponent,
    RadioComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    InputContanerComponent,
    RatingComponent,
    RadioComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        OrderService,
        RestaurantsService,
        ShoppingCartService,
        { provide: LOCALE_ID, useValue: 'pt-BR' },
      ]
    }
  }
}
