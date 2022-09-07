import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TourService, TourBackdropService, TourModule } from 'ngx-ui-tour-core';

import { IonicTourService } from './ionic-tour.service';
import { TourAnchorIonicDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { IonPopoverTemplateComponent } from './ion-popover-template.component';

export { TourAnchorIonicDirective, TourStepTemplateComponent, IonicTourService };

@NgModule({
  declarations: [TourAnchorIonicDirective, TourStepTemplateComponent, IonPopoverTemplateComponent],
  exports: [TourAnchorIonicDirective, TourStepTemplateComponent],
  imports: [CommonModule, IonicModule, RouterModule, TourModule],
})
export class TourIonicModule {
  public static forRoot(): ModuleWithProviders<TourIonicModule> {
    return {
      ngModule: TourIonicModule,
      providers: [
        TourStepTemplateService,
        TourService,
        IonicTourService,
        TourBackdropService
      ],
    };
  }
}
