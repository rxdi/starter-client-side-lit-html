import { html, render } from 'lit-html';
import { customElement } from '@rxdi/lit-html';
import { State } from './app.state';
import { Inject } from '@rxdi/core';

import '@rxdi/router';
import './footer/footer.component';
import './navbar/navbar.component';

@customElement('app-component')
export class AppComponent extends HTMLElement {

  @Inject(State) private state: State;

  OnInit() {
    render(
      html`
        <router-outlet>
         <navbar-component></navbar-component>
         <footer-component></footer-component>
        </router-outlet>
      `,
      document.body
    );
  }
}
