import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TourIonicModule, TourAnchorIonicDirective} from 'ngx-ui-tour-ionic';
import {IonicComponent} from './ionic.component';
import {tuiGenerateRoutes, TuiDocDocumentationModule, TuiDocPageModule} from '@taiga-ui/addon-doc';
import {RouterModule} from '@angular/router';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [IonicComponent],
    imports: [
        CommonModule,
        TourIonicModule.forRoot(),
        RouterModule.forChild(tuiGenerateRoutes(IonicComponent)),
        TuiDocPageModule,
        TuiDocDocumentationModule,
        TuiLinkModule,
        TuiButtonModule,
        SharedModule.withAnchorDirectiveType(TourAnchorIonicDirective)
    ]
})
export class IonicModule {}
