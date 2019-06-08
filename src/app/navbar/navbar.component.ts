import { Router } from '@rxdi/router';
import {
  html,
  property,
  eventOptions,
  css,
  LitElement,
  customElement
} from '@rxdi/lit-html';
import './buttons/buttons.component';
import { globalCSS } from '../../styles';

@customElement('navbar-component', {
  style: css`
    ${globalCSS}
    .spacer {
      flex: 1 3 auto;
    }
    app-button {
      margin-right: 20px;
    }
    .container {
      padding: 10px;
      position: fixed;
      width: 100%;
      top: 0px;
      z-index: 1001;
    }
  `,
  template(this: NavbarComponent) {
    return html`
      <div class="container bg context flex">
        <app-button
          @click=${() => this.router.go('/')}
          text="Home"
        ></app-button>
        <app-button
          @click=${() => this.router.go('/about')}
          text="About"
        ></app-button>
        <span class="spacer"></span>
        <app-button text="DOCUMENTATION"></app-button>
        <app-button text="RELEASE NOTES"></app-button>
        <app-button text="API REFERENCE"></app-button>
        <app-button text="GITHUB"></app-button>
      </div>
    `;
  }
})
export class NavbarComponent extends LitElement {
  @property() counter = 0;

  @Router() router: Router;

  @eventOptions({ capture: true })
  onIncrement(e: Event) {
    this.counter++;
  }

  @eventOptions({ capture: true })
  onDecrement(e: Event) {
    this.counter--;
  }
}
