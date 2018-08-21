import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../services/auth.guard";

const router: Routes = [
    {
        path: '**',
        component: NotFoundComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [
        RouterModule
    ]
})

export class NotFoundModule { }