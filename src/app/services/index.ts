import { MsalGuard } from './msal/msal.guard';
import { MsalService } from './msal/msal.service';
import { BaseService } from './core/base.service';
import { GenericService } from './core/generic.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { NotificationCustomService } from './notifier/notifier.service';
import { HandleErrorService } from './core/handle-error.service';

export const SERVICES = [
    MsalGuard,
    MsalService,
    BaseService,
    GenericService,
    AuthService,
    AuthGuard,
    NotificationCustomService,
    HandleErrorService
];