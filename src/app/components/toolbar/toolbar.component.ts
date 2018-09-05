import { Component, OnInit } from '@angular/core';
import { AuthService, Auth } from '../../services/auth/auth.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    constructor(private _auth: AuthService) {}

    ngOnInit() {}

    get authenticated() {
        return this._auth.isAuthenticated;
    }

    login() {
        const data: Auth = {
            userName: 'admin',
            password: '12345'
        };

        this._auth.login(data);
    }
}
