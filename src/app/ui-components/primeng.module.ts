import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as _ from 'lodash';

import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';

const modules = [
    ToolbarModule,
    SplitButtonModule
];

@NgModule({
    imports: _.concat(modules, CommonModule),
    exports: modules
})

export class PrimeNgModule { }