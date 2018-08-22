import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { MsalService } from "./msal.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class MsalGuard implements CanActivate {

    constructor(private msal: MsalService, private auth: AuthService) { }

    canActivate() {
        if (this.msal.isOnline() && this.auth.isAuthenticated === false) {
            return true;
        } else {
            this.msal.login();
        }

        return false;
    }
}