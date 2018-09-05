import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { MsalService } from "./msal.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class MsalGuard implements CanActivate {

    constructor(private _msal: MsalService, private _auth: AuthService) { }

    canActivate() {
        if (this._auth.isOnline && this._auth.isAuthenticated === false) {
            return true;
        } else {
            this._msal.login();
        }

        return false;
    }
}