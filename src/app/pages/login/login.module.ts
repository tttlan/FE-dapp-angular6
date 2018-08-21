import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { MsalGuard } from "../../services/msal/msal.guard";

const router: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [MsalGuard]
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [
        RouterModule
    ]
})

export class LoginModule {

}