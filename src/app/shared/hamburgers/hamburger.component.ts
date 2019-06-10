import { Component, LitElement, html, property } from '@rxdi/lit-html';
import { style } from './hamburger.component.css';
import { HambuergerTypes } from './hamburger.type';

/**
 * @customElement hamburger-component
 */
@Component({
  selector: 'hamburger-component',
  style,
  template(this: HamburgerComponent) {
    return html`
      <div
        @click=${() => (this.active = !this.active)}
        class="hamburger hamburger--${this.type} ${this.active
          ? 'is-active'
          : ''}"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    `;
  }
})
export class HamburgerComponent extends LitElement {
  @property() active: boolean;
  @property() type: HambuergerTypes = '3dx';
}
