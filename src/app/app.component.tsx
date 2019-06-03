import { Component } from '@rxdi/core';
import { html, render } from 'lit-html';
import { State } from './app.state';

import '@rxdi/router';
import './footer/footer.component';
import './navbar/navbar.component';

@Component()
export class AppComponent {
  constructor(
    private state: State
  ) {}

  OnInit() {
    render(
      html`
        <router-outlet
          header=${this.getHeader().getHTML()}
          footer=${this.getFooter().getHTML()}
        >
        </router-outlet>
      `,
      document.body
    );
  }

  getFooter() {
    return html`
      <footer-component></footer-component>
    `;
  }

  getHeader() {
    return html`
      <navbar-component></navbar-component>
    `;
  }
}
