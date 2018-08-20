import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { MsalService } from "./msal.service";

@Injectable()
export class MsalGuard implements CanActivate {

    constructor(private msal: MsalService) {}

    canActivate() {
        return this.msal.isOnline();
    }
}