import { TourService, IStepOption } from 'ngx-ui-tour-ionic';
import { Component, Inject, OnInit } from '@angular/core';
import { default as defaultTemplate } from '!!raw-loader!./examples/default-template.txt';
import { DELAY_AFTER_NAVIGATION } from '../app.providers';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-ionic',
    templateUrl: './ionic.component.html',
    styleUrls: ['./ionic.component.scss']
})
export class IonicComponent implements OnInit {

    readonly tourSteps: IStepOption[] = [{
        anchorId: 'start.tour',
        content: 'Welcome to the Ngx-UI-Tour tour!',
        placement: 'bottom',
        title: 'Welcome',
    }, {
        anchorId: 'angular-ui-tour',
        content: 'Thanks to angular-ui-tour for the inspiration for the library',
        title: 'angular-ui-tour'
    }, {
        anchorId: 'installation',
        content: 'First, install the library...',
        title: 'Installation',
        route: 'ionic/Setup'
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'ionic/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'ionic/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'ionic/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'ionic/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'ionic/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'ionic/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'ionic/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'ionic/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'ionic/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'ionic/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'ionic/Misc'
    }];
    readonly defaultTemplate = defaultTemplate;

    constructor(
        private readonly tourService: TourService,
        @Inject(DELAY_AFTER_NAVIGATION)
        private readonly delayAfterNavigation: number,
        private popoverController: PopoverController
    ) { }

    ngOnInit() {
        this.tourService.initialize(this.tourSteps, {
            route: 'ionic',
            placement: 'top-left',
            delayAfterNavigation: this.delayAfterNavigation
        });
    }

    start() {
        this.tourService.start();
    }

}
