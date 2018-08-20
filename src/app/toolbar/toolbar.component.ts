import { Component, OnInit } from '@angular/core';
import { MsalService } from '../msal/msal.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    constructor(private msal: MsalService) {
        
    }

    ngOnInit() {}

    get authenticated() {
        return this.msal.isAuthenticated;
    }

    login() {
        this.msal.login();
    }

    logout() {
        this.msal.logout();
    }
}
