import { html, LitElement, property, eventOptions, css, customElement } from 'lit-element';
import { Component} from '@rxdi/core';
import '../shared/components/button/button.component';
import { Router } from '@rxdi/router';

@customElement('navbar-component')
@Component()
export class NavbarComponent extends LitElement {
  static styles = css`
  .spacer {
    flex: 1 3 auto;
  }
  `;

  @property() counter = 0;

  render() {
    return html`
      <div style="display:flex">
        <button-component text="Home" type="normal" href="/"></button-component>
        <button-component text="Not Found" type="normal" href="/not-found"></button-component>
        <button-component text="Consultants" type="normal" href="/consultants"></button-component>
        <button-component text="Login" type="normal" href="/login"></button-component>
      </div>
      <!-- <nav>
        <a @click=${this.onIncrement}><button>App</button></a>
        <a @click=${this.onDecrement}><button>Another view</button></a>
      </nav> -->

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
