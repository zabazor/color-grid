import { Component, HostListener } from '@angular/core';
import { SUBSCRIPTION_KEYS } from './core/constants';
import { SubscriptionService } from './core/services';

@Component({
  selector: 'cg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Color Grid';

  constructor(private subscriptionService: SubscriptionService) {}

  @HostListener('document:keydown.arrowRight', ['$event']) arrowRight(
    e: KeyboardEvent
  ): void {
    // I might not care if there is a value
    this.subscriptionService.set(SUBSCRIPTION_KEYS.rightArrowDown, true);
  }

  @HostListener('document:keydown.arrowLeft', ['$event']) arrowLeft(
    e: KeyboardEvent
  ): void {
    this.subscriptionService.set(SUBSCRIPTION_KEYS.leftArrowDown, true);
  }
}
