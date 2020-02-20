import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsService } from '../restaurants/services/restaurants.service';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

const routes: Routes = [
    {
        path: '', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'review', component: ReviewsComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [RestaurantsService]
})
export class RestaurantDetailRoutingModule { }
