import { Inject } from '@rxdi/core';
import { html, render, customElement } from '@rxdi/lit-html';
import { State } from './app.state';

@customElement('app-component')
export class AppComponent extends HTMLElement {
  @Inject(State) private state: State;

  OnInit() {
    render(
      html`
        <router-outlet>
          <navbar-component slot="header"></navbar-component>
          <footer-component slot="footer"></footer-component>
        </router-outlet>
      `,
      document.body
    );
  }
}
