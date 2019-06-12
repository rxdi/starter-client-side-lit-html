import { Component, LitElement, css, property } from '@rxdi/lit-html';
import { template } from './home.component.html';
import { style } from './home.component.css';
import { Router } from '@rxdi/router';

/**
 * @customElement home-component
 */
@Component({
  selector: 'home-component',
  style,
  template
})
export class HomeComponent extends LitElement {
  @property() showIFrame: boolean;

  @Router() router: Router;
}
