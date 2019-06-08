import { Inject } from '@rxdi/core';
import { html, render, customElement, css } from '@rxdi/lit-html';
import { State } from './app.state';
import { globalCSS } from '../styles';

@customElement('app-component', {
  style: globalCSS
})
export class AppComponent extends HTMLElement {
  @Inject(State) private state: State;

  OnInit() {
    render(
      html`
      <div style="height: 100%;">
        <router-outlet>
          <navbar-component slot="header"></navbar-component>
          <footer-component slot="footer"></footer-component>
        </router-outlet>
        </div>
      `,
      document.body
    );
  }
}
