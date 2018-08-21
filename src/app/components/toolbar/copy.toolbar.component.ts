// import { Component, OnInit } from '@angular/core';
// import { MsalService } from '@azure/msal-angular';
// import * as Msal from 'msal';
// import { environment } from '../../environments/environment';
// import { tokenReceivedCallback } from 'msal/lib-commonjs/UserAgentApplication';

// @Component({
//   selector: 'app-toolbar',
//   templateUrl: './toolbar.component.html',
//   styleUrls: ['./toolbar.component.css']
// })
// export class ToolbarComponent implements OnInit {
//   private app: Msal.UserAgentApplication = null;
//   public authenticated: boolean = false;

//   constructor(private msalService: MsalService) {
//     const authority = `https://login.microsoftonline.com/${environment.tenant}`;
//     this.app = new Msal.UserAgentApplication(environment.clientID, authority, this.callback);
//   }

//   ngOnInit() {
//     this.getAuthenticated();
//   }

//   login() {
//     this.msalService.loginPopup();
//   }

//   logout() {
//     localStorage.removeItem("token");
//     this.msalService.logout();
//   }

//   getAuthenticated() {
//     this.getToken().then((token) => {
//       if (token) {
//         this.authenticated = true;
//       }

//       this.authenticated = false;
//     });
//   }

//   public callback: tokenReceivedCallback =
//     (errorDesc: any, token: any, error: any, tokenType: any) => {
//       if (error) {
//         console.error(`${error} ${errorDesc}`);
//       }
//     };

//   public getToken() {
//     return this.app.acquireTokenSilent(environment.graphScopes)
//       .then(token => {
//         localStorage.setItem('token', token);
//         return Promise.resolve(token);
//       })
//       .catch(error => {
//         return this.app.acquireTokenPopup(environment.graphScopes)
//           .then(token => {
//             console.log(token);
//             return Promise.resolve(token);
//           }).catch(innererror => {
//             return Promise.resolve('');
//           });
//       });
//   }
// }
