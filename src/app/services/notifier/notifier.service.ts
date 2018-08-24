import { Injectable } from "@angular/core";
import { NotifierService } from "angular-notifier";

@Injectable()
export class NotificationCustomService {
    constructor(private notifier: NotifierService) { }

    /**
     * Show a notification
     * 
     * @param Notification type 
     * @param Notification message 
     */
    showNotification(type: string, message: string): void {
        this.notifier.notify(type, message);
    }

    /**
     * Show a notification
     * 
     * @param Notification id 
     */
    hideNotification(id: string): void {
        this.notifier.hide(id);
    }

    /**
     * Hide oldest notification
     */
    hideOldestNotification(): void {
        this.notifier.hideOldest();
    }

    /**
	 * Hide newest notification
	 */
    hideNewestNotification(): void {
        this.notifier.hideNewest();
    }

    /**
     * Hide all notification
     */
    hideAllNotifications(): void {
        this.notifier.hideAll();
    }

    /**
	 * Show a specific notification (with a custom notification ID)
	 *
	 * @param {string} type    Notification type
	 * @param {string} message Notification message
	 * @param {string} id      Notification ID
	 */
    showSpecificNotification(type: string, message: string, id: string): void {
        this.notifier.show({
            id,
            message,
            type
        });
    }

    /**
     * Hide a specific notification (by a given notification ID)
     * 
     * @param Notification id 
     */
    hideSpecificNotification(id: string): void {
        this.notifier.hide(id);
    }

}