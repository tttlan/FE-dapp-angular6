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
    public _httpHelper: HttpHelper;
    public _serviceUrl: string;

    constructor(http: HttpClient) {
        this._http = http;
        this._serviceUrl = environment.serviceUrl;
    }

    makeCall(req: RequestObject, successCallback, errorCallback): Promise<any> {
        return;
    }

    get(url, successCallback, errorCallback) {
        let req = {
            url: url,
            method: METHOD.get
        };

        this.makeCall(req, successCallback, errorCallback);
    }

    post(url, data, successCallback, errorCallback) {
        let req = {
            url: url,
            data: data,
            method: METHOD.post
        };

        this.makeCall(req, successCallback, errorCallback);
    }

    put(url, data, successCallback, errorCallback) {
        let req = {
            url: url,
            data: data,
            method: METHOD.put
        };

        this.makeCall(req, successCallback, errorCallback);
    }

    delete(url, successCallback, errorCallback) {
        let req = {
            url: url,
            method: METHOD.delete
        };

        this.makeCall(req, successCallback, errorCallback);
    }
}