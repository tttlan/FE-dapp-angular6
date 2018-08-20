// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  clientID: 'edac9377-2342-49e5-ae0e-3472e0dc7bb9',
  graphScopes: ["openid", "profile"],
  signUpSignInPolicy: '',
  tenant: 'f4693bfd-2fe6-475f-a59f-aa2ce4e9eb94'
};
