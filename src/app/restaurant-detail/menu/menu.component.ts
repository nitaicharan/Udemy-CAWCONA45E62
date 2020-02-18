import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from 'src/app/shared/restaurants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  menu: Observable<MenuItem[]>;

  ngOnInit() {
    this.menu = this.service.getMenu(this.route.parent.snapshot.params.id);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
