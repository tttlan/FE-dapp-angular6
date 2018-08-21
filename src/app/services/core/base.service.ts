import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class BaseService {
    private _http: HttpClient;
    public _serviceUrl: string;

    constructor(http: HttpClient) {
        this._http = http;
        this._serviceUrl = environment.serviceUrl;
    }

    get() {

    }

    post() {

    }

    put() {

    }

    delete() {

    }
}