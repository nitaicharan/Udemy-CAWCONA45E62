import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";
import { errorHandler } from "@angular/platform-browser/src/browser";

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage: string;
    if (error instanceof HttpErrorResponse) {
      errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${error.error}`
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
