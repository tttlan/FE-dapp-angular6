import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BaseService {
    private _http: HttpClient;

    constructor() {}
}