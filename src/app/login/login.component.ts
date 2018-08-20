import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '../msal/msal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _router: Router;
  private _msal: MsalService;

  constructor(router: Router, msal: MsalService) {
    this._router = router;
    this._msal = msal;
  }

  ngOnInit() {
    if (this._msal.isOnline()) {
      this._router.navigate(['/home']);
    } else {
      // this._router.navigate(['/login']);
      this._msal.login();
    }
  }
}
