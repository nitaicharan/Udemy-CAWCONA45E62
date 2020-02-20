import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { OrderComponent } from '../pages/order/order/order.component';

export class LeaveOrderGuard implements CanDeactivate<OrderComponent>{
  canDeactivate(
    component: OrderComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): boolean {
    return (component.isOrderNotCompleted()) ? window.confirm('Deseja realmente sair desta página?') : false;
  }
  constructor() { }
}
