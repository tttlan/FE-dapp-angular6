import { ErrorHandler, Injectable } from "@angular/core";
import { NotificationCustomService } from "../notifier/notifier.service";
import { NOTIFICATION_TYPE } from "../../utils/constants";
import { finalize } from "rxjs/operators";

@Injectable()
export class HandleErrorService implements ErrorHandler {
    constructor(private _notification: NotificationCustomService) {}

    handleError(error) {        
        setTimeout(() => {
            this._notification.showNotification(NOTIFICATION_TYPE.error, 'Error Message');
        }, 1000);
    }
}