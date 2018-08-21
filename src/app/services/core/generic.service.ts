import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";

@Injectable()
export class GenericService extends BaseService {
    constructor(private http: HttpClient) {
        super(http);
    }

    getAll(successCallback, errorCallback) {

    }

    getById(id: number, successCallback, errorCallback) {

    }

    getByIds(ids: number[], successCallback, errorCallback) {

    }

    query(objParam, successCallback, errorCallback) {

    }

    create(data, successCallback, errorCallback) {

    }

    updateByPost(data, successCallback, errorCallback) {

    }

    updateByPut(data, successCallback, errorCallback) {

    }

    deleteById(id: number, successCallback, errorCallback) {

    }

    deleteByIds(ids: number[], successCallback, errorCallback) {

    }
}