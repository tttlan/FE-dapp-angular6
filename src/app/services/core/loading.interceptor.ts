import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from "rxjs";
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private _spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._spinner.show();

        return next.handle(req)
            .pipe(
                finalize(() => {
                    this._spinner.hide();
                })
            );
    }
}