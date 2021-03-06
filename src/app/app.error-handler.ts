import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { LoginService } from './core/services/login.service';
import { NotificationService } from './core/services/notification.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
    constructor(
        private notificationService: NotificationService,
        private injector: Injector,
        private zone: NgZone
    ) {
        super();
    }

    handleError(errorResponse: HttpErrorResponse | any) {
        if (errorResponse instanceof HttpErrorResponse) {
            let message: string = errorResponse.error.message;
            this.zone.run(() => {
                switch (errorResponse.status) {
                    case 401:
                        this.injector.get(LoginService).handleLogin();
                        break;
                    case 403:
                        message = message ? message : 'Não autorizado';
                        break;
                    case 404:
                        message = message ? message : 'Recurso não encontrado. Verifique o console para mais detalhes!';
                        break;
                }
                this.notificationService.notify(message)
            })
        }
        super.handleError(errorResponse)
    }
}