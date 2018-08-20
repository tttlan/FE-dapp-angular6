import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    public hash_token: string = null;
    public isAuthenticated: boolean = false;

    constructor() { }

    login () {
        
    }
}