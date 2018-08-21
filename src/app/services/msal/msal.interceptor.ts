import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { MsalService } from "./msal.service";
import { Observable } from "rxjs";

export class MsalInterceptor implements HttpInterceptor {
    constructor(private msal: MsalService) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
    }
}