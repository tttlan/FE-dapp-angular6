import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as _ from 'lodash';

import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';

const modules = [
    ToolbarModule,
    MenubarModule,
    ButtonModule
];

@NgModule({
    imports: _.concat(modules, CommonModule),
    exports: modules
})

export class PrimeNgModule { }