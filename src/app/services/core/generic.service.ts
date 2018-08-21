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

    }

    getById(id: number, successCallback, errorCallback) {

    }

    getByIds(ids: number[], successCallback, errorCallback) {

    }

    query(objParam, successCallback, errorCallback) {
        
    }

    create(url, data: any, successCallback, errorCallback) {

    }

    updateByPost(id: number, data: any, successCallback, errorCallback) {

    }

    updateByPut(id: number, data: any, successCallback, errorCallback) {

    }

    deleteById(id: number, successCallback, errorCallback) {

    }

    deleteByIds(ids: number[], successCallback, errorCallback) {

    }

    formatDataRequest(data: any) {
        return data;
    }

    formatDataResponse(data: any) {
        return data;
    }
}