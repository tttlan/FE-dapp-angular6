import { Injectable } from "@angular/core";
import { Auth } from "../models/auth.model";
import { GenericService } from "./core/generic.service";

@Injectable()
export class AuthService extends GenericService {
    public hash_token: string = null;
    public isAuthenticated: boolean = false;

    constructor() {
        super();
    }

    login(auth: Auth) {

    }
}