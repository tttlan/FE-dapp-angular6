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

    getAll(successCallback) {
        const url = this.serviceUrl;

        this.get(url, (response) => {
            const res = this.formatItemsResponse(response);
            successCallback(res);
        });
    }

    getById(id: number, successCallback) {
        const url = this.serviceUrl + '/' + id;

        this.get(url, (response) => {
            const res = this.formatItemResponse(response);
            successCallback(res);
        });
    }

    query(objParam, successCallback) {
        const url = this.serviceUrl + this._httpHelper.buildParams(objParam);

        this.get(url, (response) => {
            const res = this.formatItemsResponse(response);
            successCallback(res);
        });
    }

    create(url, data: any, successCallback) {
        const reqData = this.formatDataRequest(data);

        this.post(url, reqData, (response) => {
            const res = this.formatDataResponse(response);
            successCallback(res);
        });
    }

    updateByPost(id: number, data: any, successCallback) {
        const url = this.serviceUrl + '/' + id;
        const reqData = this.formatDataRequest(data);

        this.post(url, reqData, (response) => {
            const res = this.formatDataResponse(response);
            successCallback(res);
        });
    }

    updateByPut(id: number, data: any, successCallback) {
        const url = this.serviceUrl + '/' + id;
        const reqData = this.formatDataRequest(data);

        this.put(url, reqData, (response) => {
            const res = this.formatDataResponse(response);
            successCallback(res);
        });
    }

    deleteById(id: number, successCallback) {
        const url = this.serviceUrl + '/' + id;

        this.delete(url, successCallback);
    }

    deleteByIds(ids: number[], successCallback) {
        const url = this.serviceUrl + '/' + this._httpHelper.convertArrayToString(ids);

        this.delete(url, successCallback);
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