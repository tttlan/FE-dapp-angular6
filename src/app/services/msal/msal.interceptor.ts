// import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
// import { MsalService } from "./msal.service";
// import { Observable, from } from "rxjs";
// import { mergeMap } from 'rxjs/operators';

// export class MsalInterceptor implements HttpInterceptor {
//     constructor(private msalService: MsalService) { }

//     public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return from(
//             this.msalService.getToken().then(token => {
//                 const JWT = `Bearer ${token}`;

//                 return req.clone({
//                     setHeaders: {
//                         Authorization: JWT
//                     }
//                 });
//             })
//         ).pipe(mergeMap(r => next.handle(r)));
//     }
// }