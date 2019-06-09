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

@customElement('navbar-component', {
  style,
  template
})
export class NavbarComponent extends LitElement {
  @property() counter = 0;

  @Router() router: Router;

  @eventOptions({ capture: true })
  onIncrement(e: Event) {
    this.counter++;
  }

  @eventOptions({ capture: true })
  onDecrement(e: Event) {
    this.counter--;
  }
}
