import { ToolbarComponent } from './toolbar/toolbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NotifierComponent } from './notifier/notifier.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { StepperComponent } from './stepper/stepper.component';

const COMPONENTS = [
    ToolbarComponent,
    SpinnerComponent,
    NotifierComponent,
    MenuBarComponent,
    StepperComponent
];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../ui-components/primeng.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotifierModule } from 'angular-notifier';
import { notifierDefaultOptions } from './notifier/notifier.config';

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        PrimeNgModule,
        NgxSpinnerModule,
        NotifierModule.withConfig(notifierDefaultOptions),
    ],
    exports: COMPONENTS
})

export class SharedModule {

}
