import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class BaseService {
    private _http: HttpClient;
    public serviceUrl: string;

    constructor(http: HttpClient) {
        this._http = http;
        this.serviceUrl = environment.serviceUrl;
    }

    get(url, successCallback) {
        try {
            const result = this._http.get(url).toPromise();

            return result.then(successCallback);
        } catch (error) {
            throw new Error(error);
        }
    }

    post(url, data, successCallback) {
        try {
            const result = this._http.post(url, data).toPromise();

            return result.then(successCallback);
        } catch (error) {
            throw new Error(error);
        }
    }

    put(url, data, successCallback) {
        try {
            const result = this._http.put(url, data).toPromise();

            return result.then(successCallback);
        } catch (error) {
            throw new Error(error);
        }
    }

    delete(url, successCallback) {
        try {
            const result = this._http.delete(url).toPromise();

            return result.then(successCallback);
        } catch (error) {
            throw new Error(error);
        }
    }
}