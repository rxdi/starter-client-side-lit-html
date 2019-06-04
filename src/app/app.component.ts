import { Inject } from '@rxdi/core';
import { html, render, customElement } from '@rxdi/lit-html';
import { State } from './app.state';

import '@rxdi/router';
import './footer/footer.component';
import './navbar/navbar.component';

@customElement('app-component')
export class AppComponent extends HTMLElement {
  @Inject(State) private state: State;

  OnInit() {
    render(
      html`
        <navbar-component></navbar-component>
        <router-outlet></router-outlet>
        <footer-component></footer-component>
      `,
      document.body
    );
  }
}
