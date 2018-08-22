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

    get(url, successCallback, errorCallback) {
        try {
            const result = this._http.get(url).toPromise();

            return result.then(successCallback, errorCallback);
        } catch (error) {
            throw new Error(error);
        }
    }

    post(url, data, successCallback, errorCallback) {
        try {
            const result = this._http.post(url, data).toPromise();

            return result.then(successCallback, errorCallback);
        } catch (error) {
            throw new Error(error);
        }
    }

    put(url, data, successCallback, errorCallback) {
        try {
            const result = this._http.put(url, data).toPromise();

            return result.then(successCallback, errorCallback);
        } catch (error) {
            throw new Error(error);
        }
    }

    delete(url, successCallback, errorCallback) {
        try {
            const result = this._http.delete(url).toPromise();

            return result.then(successCallback, errorCallback);
        } catch (error) {
            throw new Error(error);
        }
    }
}