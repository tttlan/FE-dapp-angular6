import { Injectable } from "@angular/core";
import { NotificationCustomService } from "../notifier/notifier.service";
import { NOTIFICATION_TYPE } from "../../utils/constants";
import { HttpInterceptor } from "@angular/common/http/src/interceptor";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { HttpEvent, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
    constructor(private _notification: NotificationCustomService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => { }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.error && Object.keys(err.error).length > 0) {
                        const msg = err.message || '';
                        this._notification.showNotification(NOTIFICATION_TYPE.error, msg);
                    }
                }
            })
        );
    }
}