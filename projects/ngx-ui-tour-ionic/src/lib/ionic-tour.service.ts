import { Injectable } from '@angular/core';
import { TourService } from 'ngx-ui-tour-core';

import { IIonicStepOption } from './step-option.interface';

@Injectable({
    providedIn: 'root',
  })
export class IonicTourService extends TourService<IIonicStepOption> {}
