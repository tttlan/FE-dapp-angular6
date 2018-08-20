import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import * as Msal from 'msal';

import { CONFIG_MSAL } from './msal.config';
import { Router } from '@angular/router';

const CONFIG = CONFIG_MSAL.Settings;

@Injectable()
export class MsalService {
    public access_token = null;

    private app: any;
    public user;
    private _router: Router;

    constructor() {
        this.app = new Msal.UserAgentApplication(
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

        // this.app.popup = CONFIG.POP_UP;
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
        // this.app.popup ? this.loginPopUp() : 
        this.loginRedirect();
    }

    public loginRedirect() {
        return this.app.loginRedirect(CONFIG.SCOPES).then(
            idToken => {
                this.acquireToken();
            },
            error => {
                console.log('Error during login:\n' + error);
            }
        );
    }

    public loginPopUp() {
        return this.app.loginPopup(CONFIG.SCOPES).then(
            idToken => {
                this.acquireToken();
            },
            error => {
                console.log('Error during login:\n' + error);
            }
        );
    }

    public acquireToken() {
        this.app.acquireTokenSilent(CONFIG.SCOPES).then(
            accessToken => {
                this.access_token = accessToken;

                this.user = this.app.getUser();

                this.goToLoginPage();
            },
            error => {
                this.app.acquireTokenPopup(CONFIG.SCOPES).then(accessToken => {
                    console.log('Error acquiring the popup:\n' + error);
                });
            }
        );
    }

    public logout() {
        this.app.logout();
    }

    public isOnline(): boolean {
        return this.app.getUser() != null;
    }

    public getCurrentLogin() {
        const user = this.app.getUser();
        return user;
    }

    public getToken() {
        return this.app.acquireTokenSilent(CONFIG.SCOPES).then(accessToken => {
            return accessToken;
        },
            error => {
                return this.app.acquireTokenSilent(CONFIG.SCOPES).then(accessToken => {
                    return accessToken;
                },
                    err => {
                        console.error(err);
                    });
            });
    }

    public goToLoginPage() {
        this._router.navigate(['/login']);
    }
}