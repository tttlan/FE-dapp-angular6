import { Injectable } from '@angular/core';

import * as Msal from 'msal';

import { CONFIG_MSAL } from './msal.config';
import { LocalStorageHelper } from '../../utils/localStorageHelper';

const CONFIG = CONFIG_MSAL.Settings;

@Injectable()
export class MsalService {
    private _storage: any = new LocalStorageHelper();
    private _app: any;
    public user;
    public access_token = null;

    constructor() {
        this._app = new Msal.UserAgentApplication(
            CONFIG.CLIENT_ID,
            CONFIG.AUTHORITY,
            this.callback,
            {
                cacheLocation: 'localStorage',
                redirectUri: CONFIG.REDIRECT_URI,
                postLogoutRedirectUri: CONFIG.POST_LOGOUT_REDIRECT,
                navigateToLoginRequestUrl: CONFIG.NAVIGATE_TO_LOGIN_REQUEST_URI
            }
        );

        // this._app.popup = CONFIG.POP_UP;
    }

    public callback(errorDesc, token, error, tokenType) {
        // callback for login redirect
        if (error) {
            console.log(JSON.stringify(error));
            return;
        }
        this.access_token = token;
    }

    public login() {
        // this._app.popup ? this.loginPopUp() : 
        this.loginRedirect();
    }

    public loginRedirect() {
        return this._app.loginRedirect(CONFIG.SCOPES).then(
            idToken => {
                this.acquireToken();
            },
            error => {
                console.log('Error during login:\n' + error);
            }
        );
    }

    public loginPopUp() {
        return this._app.loginPopup(CONFIG.SCOPES).then(
            idToken => {
                this.acquireToken();
            },
            error => {
                console.log('Error during login:\n' + error);
            }
        );
    }

    public acquireToken() {
        this._app.acquireTokenSilent(CONFIG.SCOPES).then(
            accessToken => {
                this.access_token = accessToken;
                this.user = this._app.getUser();
            },
            error => {
                this._app.acquireTokenPopup(CONFIG.SCOPES).then(accessToken => {
                    console.log('Error acquiring the popup:\n' + error);
                });
            }
        );
    }

    public logout() {
        this._app.logout();
    }

    public isOnline(): boolean {
        return this._app.getUser() != null;
    }

    public getCurrentLogin() {
        const user = this._app.getUser();
        return user;
    }

    public getToken() {
        return this._storage.getValue('msal.idtoken');
    }
}