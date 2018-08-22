import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MsalService } from '../../services/msal/msal.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    constructor(private auth: AuthService, private msal: MsalService) {}

    ngOnInit() {}

    get authenticated() {
        return this.auth.isAuthenticated;
    }

    login() {
        this.msal.login();
    }
}
