import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Auth } from "../../models/auth.model";
import { GenericService } from "../core/generic.service";

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