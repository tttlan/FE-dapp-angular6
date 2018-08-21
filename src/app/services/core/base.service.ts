import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { HttpHelper } from "../../utils/httpHelper";
import { METHOD } from "../../utils/constants";

export interface RequestObject {

}

@Injectable()
export class BaseService {
    private _http: HttpClient;
    private _httpHelper: HttpHelper;
    public _serviceUrl: string;

    constructor(http: HttpClient) {
        this._http = http;
        this._serviceUrl = environment.serviceUrl;
    }

    makeCall(req: RequestObject, successCallback, errorCallback) {

    }

    get(url, successCallback, errorCallback) {
        let req = {
            url: url,
            method: METHOD.get
        };

        this.makeCall(req, successCallback, errorCallback);
    }

    post() {

    }

    put() {

    }

    delete() {

    }
}