import { TourHotkeyListenerComponent, IStepOption } from 'ngx-ui-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import {
  Component,
  TemplateRef,
  ViewChild,
  OnInit,
  ViewEncapsulation,
  Input,
  ContentChild
} from '@angular/core';
import { IonicTourService } from './ionic-tour.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  template: `
    <ng-template #tourStep let-step="step">
      <ion-content>
        <ion-card class="ion-no-margin">
          <ion-card-header>
            <ion-row class="ion-align-items-center">
              <ion-col>
                <ion-text><h4><strong>{{step?.title}}</strong></h4></ion-text>
              </ion-col>
              <ion-col>
                <ion-button fill="clear" class="ion-float-end ion-no-padding" style="height: 20px;" (click)="tourService.end()">
                  <ion-icon class="ion-float-end" icon="close"></ion-icon>
                </ion-button>
              </ion-col>
            </ion-row>
          </ion-card-header>

          <ion-card-content>
            <ion-text class="tour-step-content">{{step?.content}}</ion-text>
            <div class="tour-step-navigation ion-margin-top">
              <ion-button fill="clear" class="ion-float-start ion-no-padding ion-margin-bottom" [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">
                <ion-icon icon="chevron-back"></ion-icon>{{ step?.prevBtnTitle }}
              </ion-button>
              <ion-button fill="clear" class="ion-float-end ion-no-padding ion-margin-bottom" *ngIf="tourService.hasNext(step) && !step.nextOnAnchorClick" (click)="tourService.next()">
                {{ step?.nextBtnTitle }}<ion-icon icon="chevron-forward"></ion-icon>
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ng-template>
  `
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements OnInit {
  @ViewChild('tourStep', { read: TemplateRef, static: true })
  public defaultTourStepTemplate: TemplateRef<any>;

  @Input()
  public stepTemplate: TemplateRef<{ step: IStepOption }>;

  @ContentChild(TemplateRef)
  public stepTemplateContent: TemplateRef<{ step: IStepOption }>;

  constructor(
    private tourStepTemplateService: TourStepTemplateService,
    public tourService: IonicTourService
  ) {
    super(tourService);
  }

  public ngOnInit(): void {
    this.tourStepTemplateService.template =
      this.stepTemplate ||
      this.stepTemplateContent ||
      this.defaultTourStepTemplate;
  }
}
