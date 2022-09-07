import { IStepOption } from 'ngx-ui-tour-core';
import { PositionAlign, PositionSide } from '@ionic/core';

export interface IIonicStepOption extends IStepOption {
    alignment?: PositionAlign;
    side?: PositionSide;
    cssClass?: string | string[];
}
