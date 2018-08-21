import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { MsalService } from "./msal.service";

@Injectable()
export class MsalInterceptor implements HttpInterceptor {
    constructor(private msal: MsalService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.msal.isOnline()) {
            this.msal.getToken().then(token => {
                req = req.clone({
                    setHeaders: {
                        LOGIN_TOKEN: `Bearer ${token}`
                    }
                });
            });

            return next.handle(req);
        }

        return next.handle(req);
    }
}