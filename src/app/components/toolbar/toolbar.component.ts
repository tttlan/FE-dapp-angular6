import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MsalService } from '../../services/msal/msal.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    private _auth: AuthService;
    private _msal: MsalService;

    constructor(private auth: AuthService, private msal: MsalService) {
        this._auth = auth;
        this._msal = msal;
    }

    ngOnInit() {}

    get authenticated() {
        return this._auth.isAuthenticated;
    }

    login() {
        this._msal.login();
    }
}
