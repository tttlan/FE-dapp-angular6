import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationCustomService } from "../notifier/notifier.service";
import { NOTIFICATION_TYPE } from "../../utils/constants";

@Injectable()
export class HandleErrorService implements ErrorHandler {
    constructor(private _notification: NotificationCustomService) { }

    handleError(error) {
        this._notification.showNotification(NOTIFICATION_TYPE.error, 'error');
    }
}