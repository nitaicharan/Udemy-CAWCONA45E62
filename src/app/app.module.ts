import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationErrorHandler } from './app.error-handler';
import { CoreModule } from './core/core.module';
import { LoginService } from './core/services/login.service';
import { NotificationService } from './core/services/notification.service';
import { ShoppingCartService } from './core/services/shopping-cart.service';
import { AuthInterceptor } from './guards/auth.interceptor';
import { LeaveOrderGuard } from './guards/leave-order.guard';
import { LoggedInGuard } from './guards/loggeding.guard';
import { LayoutModule } from './layouts/layout.module';
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
  ],
  providers: [
    LoggedInGuard,
    AuthInterceptor,
    LeaveOrderGuard,
    ShoppingCartService,
    LoginService,
    NotificationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: ErrorHandler, useClass: ApplicationErrorHandler },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }