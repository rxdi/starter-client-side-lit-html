import { html, LitElement, property, eventOptions, css, customElement } from 'lit-element';

@customElement('navbar-component')
export class NavbarComponent extends LitElement {
  static styles = css`
  .spacer {
    flex: 1 3 auto;
  }
  `;

  @property() counter = 0;

  render() {
    return html`
      <nav>
        <a href="/"><button>App</button></a>
        <a href="/not-found"><button>Another view</button></a>
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
