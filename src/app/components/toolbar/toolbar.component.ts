import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    private _auth: AuthService;

    constructor(private auth: AuthService) {
        this._auth = auth;
    }

    ngOnInit() {}

    get authenticated() {
        return this._auth.isAuthenticated;
    }
}
