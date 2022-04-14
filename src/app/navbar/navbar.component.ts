import {
  Component,
  css,
  eventOptions,
  html,
  LitElement,
  property,
} from '@rxdi/lit-html';
import { Router } from '@rxdi/router';

/**
 * @customElement navbar-component
 */
@Component({
  selector: 'navbar-component',
  style: css`
    .spacer {
      flex: 1 3 auto;
    }
    .container {
      display: flex;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #f3f3f3;
      cursor: pointer;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      color: #666;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover:not(.active) {
      background-color: #ddd;
    }

    li a.active {
      color: white;
      background-color: #4caf50;
    }
  `,
  template(this: NavbarComponent) {
    return html`
      <ul class="container">
        <li><a @click=${() => this.router.go('/')}>Home</a></li>
        <li><a @click=${() => this.router.go('/flex')}>Flex</a></li>
        <li><a @click=${() => this.router.go('/about')}>About</a></li>
        <li><a @click=${() => this.router.go('/forms')}>Forms</a></li>
        <span class="spacer"></span>
        <li><a @click=${this.onIncrement}>Increment</a></li>
        <li><a @click=${this.onDecrement}>Decrement</a></li>
        <li><a>${this.counter}</a></li>
      </ul>
    `;
  },
})
export class NavbarComponent extends LitElement {
  @property({ type: Number }) counter = 0;

  @Router() router: Router;

  @eventOptions({ capture: true })
  onIncrement(e: Event) {
    e;
    this.counter++;
  }

  @eventOptions({ capture: true })
  onDecrement(e: Event) {
    e;
    this.counter--;
  }
}
