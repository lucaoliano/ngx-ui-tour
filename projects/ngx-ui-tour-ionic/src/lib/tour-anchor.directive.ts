import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import type { OnDestroy, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ElementSides, isInViewport, ScrollingUtil, TourAnchorDirective, TourBackdropService, TourState } from 'ngx-ui-tour-core';
import { IIonicStepOption as IStepOption } from './step-option.interface';

import { IonicTourService } from './ionic-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { IonPopoverTemplateComponent } from './ion-popover-template.component';

@Directive({
  selector: '[tourAnchor]'
})
export class TourAnchorIonicDirective
  implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;

  @HostBinding('class.touranchor--is-active')
  public isActive: boolean;

  constructor(
    private tourService: IonicTourService,
    private tourStepTemplate: TourStepTemplateService,
    public element: ElementRef,
    private popoverController: PopoverController) { }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  // noinspection JSUnusedGlobalSymbols
  public showTourStep(step: IStepOption): void {
    const htmlElement: HTMLElement = this.element.nativeElement;
    this.isActive = true;

    const boundingRect = htmlElement.getBoundingClientRect();
    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      composed: true,
      clientX: boundingRect.x,
      clientY: boundingRect.y + boundingRect.height,
      detail: 1,
      screenX: boundingRect.x,
      screenY: boundingRect.y + boundingRect.height,
      relatedTarget: htmlElement,
      view: window
    });
    Object.defineProperty(event, 'target', { value: htmlElement, enumerable: true });
    Object.defineProperty(event, 'srcElement', { value: htmlElement, enumerable: true });
    Object.defineProperty(event, 'toElement', { value: htmlElement, enumerable: true });

    this.popoverController.create({
      component: IonPopoverTemplateComponent,
      event,
      side: step.side,
      alignment: step.alignment,
      arrow: false,
      showBackdrop: false,
      backdropDismiss: false,
      cssClass: ['touranchor--hidden'].concat(step.cssClass || []),
      componentProps: {
        step,
        stepTemplate: this.tourStepTemplate.template,
      }
    }).then(popover => {
      popover.present().then(() => {
        document.querySelectorAll('ion-popover')?.forEach(p => {
          p.shadowRoot.querySelector('ion-backdrop')?.remove();
          p.setAttribute('style', `width: 0px; height: 100%; ${p.getAttribute('style')}`);
          document.body.insertAdjacentElement('beforeend', p);
          const popoverContent = p.shadowRoot.querySelector<HTMLElement>('div > div.popover-content');
          if (!isInViewport(popoverContent, ElementSides.Bottom)) {
            Object.assign(popoverContent.style, {
              top: `${htmlElement.getBoundingClientRect().y + window.scrollY - popoverContent.getBoundingClientRect().height}px`,
            });
          } else {
            if (step.side === 'top') {
              Object.assign(popoverContent.style, {
                top: `${htmlElement.getBoundingClientRect().y + window.scrollY - popoverContent.getBoundingClientRect().height}px`,
              });
            } else {
              Object.assign(popoverContent.style, {
                top: `${htmlElement.getBoundingClientRect().y + htmlElement.getBoundingClientRect().height + window.scrollY}px`,
              });
            }
          }
          Object.assign(p.style, { position: 'absolute' });
          p.classList.remove('touranchor--hidden');
          ScrollingUtil.ensureVisible(popoverContent);
        });
      });
    });
  }

  public hideTourStep(): void {
    this.isActive = false;
    this.popoverController.getTop().then(popover => popover?.dismiss());
  }
}
