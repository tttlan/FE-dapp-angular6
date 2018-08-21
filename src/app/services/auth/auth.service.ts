import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GenericService } from "../core/generic.service";

export class Auth {
    userName: string;
    password: string;
};

@Injectable()
export class AuthService extends GenericService {
    public hash_token: string = null;
    public isAuthenticated: boolean = false;

    constructor(http: HttpClient) {
        super(http);
    }

    login(auth: Auth) {
        
    }
}