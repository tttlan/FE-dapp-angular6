export let CONFIG_MSAL = {
    Settings: {
        CLIENT_ID: 'edac9377-2342-49e5-ae0e-3472e0dc7bb9', // https://apps.dev.microsoft.com’
        TENANT: 'Lan Tran',
        TENANT_ID: 'f4693bfd-2fe6-475f-a59f-aa2ce4e9eb94', // found in Azure->Active Directory->Properties Pane, TennantID = Directory ID
        AUTHORITY: 'https://login.microsoftonline.com/f4693bfd-2fe6-475f-a59f-aa2ce4e9eb94',

        RESPONSE_TYPE: 'id_token',
        RESPONSE_MODE: 'id_token',
        STATE: '',
        MS_GRAPH_URI: 'https://graph.microsoft.com/',
        REDIRECT_URI: 'http://localhost:4200/login',
        POST_LOGOUT_REDIRECT: 'https://localhost:4200/login',
        MSGRAPH_BETA_API: 'https://graph.microsoft.com/beta/',
        MSGRAPH_v1_API: 'https://graph.microsoft.com/v1.0/',
        SCOPES: ['People.Read'], // People.Read.All - Requires an Administrator to grant this permission
        ADMIN_CONSENT: true,
        POP_UP: true,
        NAVIGATE_TO_LOGIN_REQUEST_URI: true
    }
};