import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { HttpHelper } from "../../utils/httpHelper";

@Injectable()
export class GenericService extends BaseService {
    private _httpHelper: any = new HttpHelper();

    constructor(http: HttpClient) {
        super(http);

        this.serviceUrl = this.serviceUrl;
    }

    getAll(successCallback, errorCallback) {
        const url = this.serviceUrl;

        this.get(url, (response) => {
            const res = this.formatItemsResponse(response);
            successCallback(res);
        }, errorCallback);
    }

    getById(id: number, successCallback, errorCallback) {
        const url = this.serviceUrl + '/' + id;

        this.get(url, (response) => {
            const res = this.formatItemResponse(response);
            successCallback(res);
        }, errorCallback);
    }

    query(objParam, successCallback, errorCallback) {
        const url = this.serviceUrl + this._httpHelper.buildParams(objParam);

        this.get(url, (response) => {
            const res = this.formatItemsResponse(response);
            successCallback(res);
        }, errorCallback);
    }

    create(url, data: any, successCallback, errorCallback) {
        const reqData = this.formatDataRequest(data);

        this.post(url, reqData, (response) => {
            const res = this.formatDataResponse(response);
            successCallback(res);
        }, errorCallback);
    }

    updateByPost(id: number, data: any, successCallback, errorCallback) {
        const url = this.serviceUrl + '/' + id;
        const reqData = this.formatDataRequest(data);

        this.post(url, reqData, (response) => {
            const res = this.formatDataResponse(response);
            successCallback(res);
        }, errorCallback);
    }

    updateByPut(id: number, data: any, successCallback, errorCallback) {
        const url = this.serviceUrl + '/' + id;
        const reqData = this.formatDataRequest(data);

        this.put(url, reqData, (response) => {
            const res = this.formatDataResponse(response);
            successCallback(res);
        }, errorCallback);
    }

    deleteById(id: number, successCallback, errorCallback) {
        const url = this.serviceUrl + '/' + id;

        this.delete(url, successCallback, errorCallback);
    }

    deleteByIds(ids: number[], successCallback, errorCallback) {
        const url = this.serviceUrl + '/' + this._httpHelper.convertArrayToString(ids);

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