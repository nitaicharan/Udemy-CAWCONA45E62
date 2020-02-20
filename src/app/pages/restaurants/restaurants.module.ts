import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './services/restaurants.service';

const routes: Routes = [
  { path: '', component: RestaurantsComponent }
];
@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [RestaurantsService]
})
export class RestaurantsModule { }
