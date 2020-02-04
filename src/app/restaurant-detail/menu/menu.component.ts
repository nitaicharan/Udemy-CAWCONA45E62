import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/core/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  menu: Observable<MenuItem[]>

  ngOnInit() {
    this.menu = this.service.getMenu(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
