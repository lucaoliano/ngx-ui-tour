import { Component, TemplateRef, Input } from '@angular/core';
import { IStepOption } from 'ngx-ui-tour-core';

@Component({
  selector: 'tour-popover-template',
  template: `<ng-container *ngTemplateOutlet="stepTemplate; context: { step: step }"></ng-container>`
})
export class IonPopoverTemplateComponent {

  @Input()
  stepTemplate: TemplateRef<{ step: IStepOption }>;

  @Input()
  step: IStepOption;
}
