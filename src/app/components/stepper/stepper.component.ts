import { OnInit, AfterViewInit, Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class StepperComponent implements OnInit, AfterViewInit {
    public forms: any;

    constructor() { }

    ngOnInit() {
        this.forms = {
            steps: [{
                step: 1,
                name: "First Step",
                // template: 'This is the first step',
                // template: "template.step1.html", // Load an html file. Ideally with Angular template cache. If you do so you have to replace {{step.template}} with ng-include="step.template" in directive -> template: ....
                expanded: true
            }, {
                step: 2,
                name: "Second Step",
                // template: "This is the second step",
                // template: "template.step2.html", // Load an html file. Ideally with Angular template cache. If you do so you have to replace {{step.template}} with ng-include="step.template" in directive -> template: ....
                expanded: false
            }, {
                step: 3,
                name: "Third Step",
                // template: "This is the third step",
                // template: "template.step3.html", // Load an html file. Ideally with Angular template cache. If you do so you have to replace {{step.template}} with ng-include="step.template" in directive -> template: ....
                expanded: false
            }, {
                step: 4,
                name: "Fourth Step",
                // template: "This is the fourth step",
                // template: "template.step4.html", // Load an html file. Ideally with Angular template cache. If you do so you have to replace {{step.template}} with ng-include="step.template" in directive -> template: ....
                expanded: false
            }]
        }
    }

    ngAfterViewInit() {

    }

    trackByStep(index) {
        return index;
    }

    toggleListItems(index) {

        this.forms.steps[index].expanded = !this.forms.steps[index].expanded;

        for (var i = 0; i < this.forms.steps.length; i++) {

            if (this.forms.steps[i].expanded === true && i != index) {
                this.forms.steps[i].expanded = false;
            }
        }
    };
}