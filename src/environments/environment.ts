// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  msalConfig: {
    clientID: 'edac9377-2342-49e5-ae0e-3472e0dc7bb9', // https://apps.dev.microsoft.com’
    tenantName: 'Lan Tran',
    tenantID: 'f4693bfd-2fe6-475f-a59f-aa2ce4e9eb94', // found in Azure->Active Directory->Properties Pane, TennantID = Directory ID
    authority: `https://login.microsoftonline.com/f4693bfd-2fe6-475f-a59f-aa2ce4e9eb94`,
    reponseType: 'id_token',
    reponseMode: 'id_token',
    state: '',
    msGraphUri: 'https://graph.microsoft.com/',
    redirectUri: 'http://localhost:4200/login',
    postLogoutRedirect: 'https://localhost:4200/login',
    msGraphBetaAPI: 'https://graph.microsoft.com/beta/',
    msGraphV1API: 'https://graph.microsoft.com/v1.0/',
    scopes: ['People.Read'], // People.Read.All - Requires an Administrator to grant this permission
    graphScopes: ["openid", "profile"],
    signUpSignInPolicy: '',
    popUp: false,
    navigateToLoginRequestUri: true
  },
  serviceUrl: 'http://localhost:9000/api/'
};
