import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GenericService } from "../core/generic.service";

export interface Auth {
    userName: string;
    password: string;
};

@Injectable()
export class AuthService extends GenericService {
    public hash_token: string = null;
    public isAuthenticated: boolean = false;

    constructor(http: HttpClient) {
        super(http);

        this._serviceUrl = this._serviceUrl + '/auth';
    }

    login(auth: Auth) {
        let serviceUrlLogin = this._serviceUrl + '/login';

        this.create(serviceUrlLogin, auth, this.loginSuccess, this.loginError);
    }

    loginSuccess(data: any) {
        console.log(data);
    }

    loginError(data: any) {
        console.log(data);
    }

    logout() {

    }
}