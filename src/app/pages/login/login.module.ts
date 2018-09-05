import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { MsalGuard } from "../../services/msal/msal.guard";
import { SharedModule } from "../../components";

const router: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [MsalGuard]
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(router),
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})

export class LoginModule {

}