import { Inject } from '@rxdi/core';
import { Component, html } from '@rxdi/lit-html';

import { State } from './app.state';

/**
 * @customElement app-component
 */
@Component({
  selector: 'app-component',
  template() {
    return html`
      <router-outlet>
        <navbar-component slot="header"></navbar-component>
        <footer-component slot="footer"></footer-component>
      </router-outlet>
    `;
  },
  container: document.body,
})
export class AppComponent extends HTMLElement {
  @Inject(State) private state: State;
}
