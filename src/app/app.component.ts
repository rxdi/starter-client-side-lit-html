import { html, Component, css } from '@rxdi/lit-html';
import { Inject } from '@rxdi/core';
import { State } from './app.state';

/**
 * @customElement app-component
 */
@Component({
  selector: 'app-component',
  style: css`
    navbar-component {
      position: fixed;
      top: 0px;
      background: #1c1f24;
      width: 100%;
      z-index: 11;
    }
  `,
  template: () => html`
    <router-outlet>
      <navbar-component slot="header"></navbar-component>
      <footer-component slot="footer"></footer-component>
    </router-outlet>
  `,
  container: document.body
})
export class AppComponent extends HTMLElement {
  @Inject(State) private state: State;
}
