import { Router } from '@rxdi/router';
import {
  html,
  property,
  eventOptions,
  css,
  LitElement,
  customElement
} from '@rxdi/lit-html';
import './buttons/buttons.component';
import { template } from './navbar.component.html';
import { style } from './navbar.component.css';
import { Inject } from '@rxdi/core';
import { ResponsiveService } from '../core/responsive/responsive.service';
import { Subscription } from 'rxjs';

@customElement('navbar-component', {
  style,
  template
})
export class NavbarComponent extends LitElement {
  @property() counter = 0;
  @property() showSanwich = true;

  @property() widthHeight: { width: number; height: number };

  @Router() router: Router;

  @Inject(ResponsiveService) private responsive: ResponsiveService;

  private subscription: Subscription;

  OnInit() {
    this.subscription = this.responsive
      .combineBoth()
      .subscribe(v => (this.widthHeight = v));
  }

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
