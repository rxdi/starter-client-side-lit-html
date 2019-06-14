import { Router } from '@rxdi/router';
import { property, eventOptions, LitElement, Component, css } from '@rxdi/lit-html';
import './buttons/buttons.component';
import { template } from './navbar.component.html';
import { style } from './navbar.component.css';
import { Inject } from '@rxdi/core';
import { ResponsiveService } from '@rxdi/ui-components/services';
import { Subscription } from 'rxjs';

/**
 * @customElement navbar-component
 */
@Component({
  selector: 'navbar-component',
  style,
  template
})
export class NavbarComponent extends LitElement {
  @property() counter = 0;
  @property() menuOpened = false;

  @property() widthHeight: { width: number; height: number };

  @Router() router: Router;

  @Inject(ResponsiveService) private responsive: ResponsiveService;

  private subscription: Subscription = this.responsive
    .combineBoth()
    .subscribe(v => (this.widthHeight = v));

  OnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @eventOptions({ capture: true })
  onIncrement(e: Event) {
    this.counter++;
  }

  @eventOptions({ capture: true })
  onDecrement(e: Event) {
    this.counter--;
  }
}
