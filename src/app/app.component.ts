import { Inject } from '@rxdi/core';
import { html, render, customElement, css } from '@rxdi/lit-html';
import { State } from './app.state';

@customElement('app-component')
export class AppComponent extends HTMLElement {
  @Inject(State) private state: State;

  OnInit() {
    render(
      html`
        <style>
          navbar-component {
            position: fixed;
            top: 0px;
            background: #1c1f24;
            width: 100%;
          }
        </style>
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
