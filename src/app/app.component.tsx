import { Component } from '@rxdi/core';
import { html, render } from 'lit-html';
import '@rxdi/router';

@Component()
export class AppComponent {
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
