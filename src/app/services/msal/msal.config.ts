import { environment } from "../../../environments/environment";

export let CONFIG_MSAL = {
    Settings: {
        CLIENT_ID: environment.msalConfig.clientID, 
        TENANT: environment.msalConfig.tenantName,
        TENANT_ID: environment.msalConfig.tenantID,
        AUTHORITY: environment.msalConfig.authority,
        RESPONSE_TYPE: environment.msalConfig.reponseType,
        RESPONSE_MODE: environment.msalConfig.reponseMode,
        STATE: environment.msalConfig.state,
        MS_GRAPH_URI: environment.msalConfig.msGraphUri,
        REDIRECT_URI: environment.msalConfig.redirectUri,
        POST_LOGOUT_REDIRECT: environment.msalConfig.postLogoutRedirect,
        MSGRAPH_BETA_API: environment.msalConfig.msGraphBetaAPI,
        MSGRAPH_v1_API: environment.msalConfig.msGraphV1API,
        SCOPES: environment.msalConfig.scopes,
        POP_UP: environment.msalConfig.popUp,
        NAVIGATE_TO_LOGIN_REQUEST_URI: environment.msalConfig.navigateToLoginRequestUri
    }
};