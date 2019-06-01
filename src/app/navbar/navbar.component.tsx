import { html, LitElement, property, eventOptions, css, customElement } from 'lit-element';
import { Component, Injector } from '@rxdi/core';
import { Router } from '@rxdi/router';
import { TestService } from '../test/test.service';
import { subscribe } from 'lit-rx';

@customElement('navbar-component')
@Component()
export class NavbarComponent extends LitElement {
  static styles = css`
  .spacer {
    flex: 1 3 auto;
  }
  `;

  @Injector(TestService)
  private test: TestService;

  @property() counter = 0;

  render() {
    return html`
    ${subscribe(this.test.gosho2)} Singleton
      <nav>
        <a @click=${() => Router().go('/')}><button>App</button></a>
        <a @click=${() => Router().go('/not-found')}><button>Another view</button></a>
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


  pesho() {
    this.dispatchEvent(new CustomEvent('pesho'));
  }
}
