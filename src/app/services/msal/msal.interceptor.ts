import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { MsalService } from "./msal.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class MsalInterceptor implements HttpInterceptor {
    constructor(private msal: MsalService, private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.msal.isOnline() && !this.auth.isAuthenticated) {
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