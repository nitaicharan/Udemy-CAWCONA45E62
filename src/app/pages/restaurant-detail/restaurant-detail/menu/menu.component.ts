import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/pages/restaurant-detail/models/menu-item.model';
import { RestaurantsService } from 'src/app/pages/restaurants/services/restaurants.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.service.getMenu(this.route.parent.snapshot.params.id);
  }

  addMenuItem = (item: MenuItem) => null;
}