import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { MsalService } from "../msal/msal.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _auth: AuthService, private _msal: MsalService, private _router: Router) { }

    canActivate() {
        if (this._auth.isAuthenticated) {
            return true;
        } else if (this._auth.isOnline && this._auth.isAuthenticated === false) {
            this._router.navigate(['/login']);
            return false;
        } else {
            this._msal.login();
        }

        return false;
    }
}