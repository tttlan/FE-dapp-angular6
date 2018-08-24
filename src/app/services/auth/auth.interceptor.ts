import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";
import { LocalStorageHelper } from "../../utils/localStorageHelper";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private _storage: LocalStorageHelper;
    
    constructor(private _auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this._auth.isAuthenticated) {
            const token = this._storage.getValue('auth_token');

            const newReq = req.clone({
                setHeaders: {
                    'AUTHORIZATION': `Bearer ${token}`
                }
            });

            return next.handle(newReq);
        }

        return next.handle(req);
    }
}