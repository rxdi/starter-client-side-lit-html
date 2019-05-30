import {
  html,
  LitElement,
  property,
  eventOptions,
  css,
  customElement
} from 'lit-element';
import { Component, Container } from '@rxdi/core';
import { Router, Outlet } from '@rxdi/router';
import { subscribe } from 'lit-rx';

@customElement('navbar-component')
@Component()
export class NavbarComponent extends LitElement {
  static styles = css`
    .spacer {
      flex: 1 3 auto;
    }
  `;


  @property() counter = 0;

  @Router()
  router: Outlet;

  render() {
    return html`
      <nav>
        <a @click=${() => this.router.go('/')}><button>Home</button></a>
        <a @click=${() => this.router.go('/about')}><button>About</button></a>
      </nav>
      <div style="display:flex">
        <button @click=${this.onIncrement}>Increment</button>
        <button @click=${this.onDecrement}>Decrement</button>
        ${this.counter}
      </div>
    `;
  }

  @eventOptions({ capture: true })
  onIncrement(e: Event) {
    this.counter++;
  }

  @eventOptions({ capture: true })
  onDecrement(e: Event) {
    this.counter--;
  }
}
