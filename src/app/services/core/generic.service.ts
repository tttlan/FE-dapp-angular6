import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";

@Injectable()
export class GenericService extends BaseService {

    constructor(private http: HttpClient) {
        super(http);

        this._serviceUrl = this._serviceUrl;
    }

    getAll(successCallback, errorCallback) {
        this.get(this._serviceUrl, (response) => {
            let data = this.formatItemsResponse(response);
            successCallback(data);
        }, errorCallback);
    }

    getById(id: number, successCallback, errorCallback) {
        let url = this._serviceUrl + '/' + id;

        this.get(url, (response) => {
            let data = this.formatItemResponse(response);
            successCallback(data);
        }, errorCallback);
    }

    query(objParam, successCallback, errorCallback) {

    }

    create(data: any, successCallback, errorCallback) {
        let reqData = this.formatDataRequest(data);

        this.post(this._serviceUrl, reqData, (response) => {
            let data = this.formatDataResponse(response);
            successCallback(data);
        }, errorCallback);
    }

    updateByPost(id: number, data: any, successCallback, errorCallback) {

    }

    updateByPut(id: number, data: any, successCallback, errorCallback) {

    }

    deleteById(id: number, successCallback, errorCallback) {

    }

    deleteByIds(ids: number[], successCallback, errorCallback) {
        let url = this._serviceUrl + '/' + this._httpHelper.convertArrayToString(ids);

        this.delete(url, successCallback, errorCallback);
    }

    formatDataRequest(data: any) {
        return data;
    }

    formatDataResponse(data: any) {
        return data;
    }

    formatItemsResponse(data: any) {
        return data;
    }

    formatItemResponse(data: any) {
        return data;
    }
}