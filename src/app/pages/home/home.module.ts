import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../services/auth/auth.guard";

const router: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeModule { }