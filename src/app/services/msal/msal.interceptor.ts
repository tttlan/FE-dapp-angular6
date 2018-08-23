import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { MsalService } from "./msal.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class MsalInterceptor implements HttpInterceptor {
    constructor(private msal: MsalService, private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.auth.isOnline && this.auth.isAuthenticated === false) {
            const token = this.msal.getToken();
            const newReq = req.clone({
                setHeaders: {
                    'LOGIN_TOKEN': `Bearer ${token}`
                }
            });

            return next.handle(newReq);
        }

        return next.handle(req);
    }
}