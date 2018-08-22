import { Component, OnInit } from '@angular/core';
import { AuthService, Auth } from '../../services/auth/auth.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    constructor(private auth: AuthService) {}

    ngOnInit() {}

    get authenticated() {
        return this.auth.isAuthenticated;
    }

    login() {
        const data: Auth = {
            userName: 'admin',
            password: '12345'
        };

        this.auth.login(data);
    }
}
