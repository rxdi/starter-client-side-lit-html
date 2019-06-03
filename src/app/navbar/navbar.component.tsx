import { html, property, eventOptions, css, LitElement } from 'lit-element';
import { Router, Outlet } from '@rxdi/router';
import { customElement } from '@rxdi/lit-html';

@customElement('navbar-component', {
  style: css`
    .spacer {
      flex: 1 3 auto;
    }
    .container {
      display: flex;
    }
  `,
  template(this: NavbarComponent) {
    return html`
      <nav>
        <a @click=${() => this.router.go('/')}><button>Home</button></a>
        <a @click=${() => this.router.go('/about')}><button>About</button></a>
      </nav>
      <div class="container">
        <button @click=${this.onIncrement}>Increment</button>
        <span class="spacer"></span>
        <button @click=${this.onDecrement}>Decrement</button>
        ${this.counter}
      </div>
    `;
  }
})
export class NavbarComponent extends LitElement {
  @property() counter = 0;

  @Router() router: Outlet;

  @eventOptions({ capture: true })
  onIncrement(e: Event) {
    this.counter++;
  }

  @eventOptions({ capture: true })
  onDecrement(e: Event) {
    this.counter--;
  }
}
