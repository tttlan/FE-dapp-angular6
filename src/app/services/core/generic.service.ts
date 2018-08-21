import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { HttpHelper } from "../../utils/httpHelper";

@Injectable()
export class GenericService extends BaseService {
    private _httpHelper: HttpHelper
    constructor(http: HttpClient) {
        super(http);

        this._serviceUrl = this._serviceUrl;
    }

    getAll(successCallback, errorCallback) {
        let url = this._serviceUrl;

        this.get(url, (response) => {
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
        let url = this._serviceUrl + this._httpHelper.buildParams(objParam);

        this.get(url, (response) => {
            let data = this.formatItemsResponse(response);
            successCallback(data);
        }, errorCallback);
    }

    create(url, data: any, successCallback, errorCallback) {
        let reqData = this.formatDataRequest(data);

        this.post(url, reqData, (response) => {
            let data = this.formatDataResponse(response);
            successCallback(data);
        }, errorCallback);
    }

    updateByPost(id: number, data: any, successCallback, errorCallback) {
        let url = this._serviceUrl + '/' + id;
        let reqData = this.formatDataRequest(data);

        this.post(url, reqData, (response) => {
            let data = this.formatDataResponse(response);
            successCallback(data);
        }, errorCallback);
    }

    updateByPut(id: number, data: any, successCallback, errorCallback) {
        let url = this._serviceUrl + '/' + id;
        let reqData = this.formatDataRequest(data);

        this.put(url, reqData, (response) => {
            let data = this.formatDataResponse(response);
            successCallback(data);
        }, errorCallback);
    }

    deleteById(id: number, successCallback, errorCallback) {
        let url = this._serviceUrl + '/' + id;

        this.delete(url, successCallback, errorCallback);
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