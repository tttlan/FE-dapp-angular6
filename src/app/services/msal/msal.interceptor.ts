import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { MsalService } from "./msal.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class MsalInterceptor implements HttpInterceptor {
    constructor(private _msal: MsalService, private _auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._auth.isOnline && this._auth.isAuthenticated === false) {
            const token = this._msal.getToken();
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