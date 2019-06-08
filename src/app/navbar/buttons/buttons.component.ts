import {
  classMap,
  customElement,
  html,
  LitElement,
  property
} from '@rxdi/lit-html';
import { style } from './buttons.component.css';

@customElement('app-button', {
  style,
  template(this: ButtonsComponent) {
    return html`
      <div
        class=${classMap({
          container: true,
          button: true,
          muted: !this.muted,
          active: this.muted
        })}
      >
        ${this.text}
      </div>
    `;
  }
})
export class ButtonsComponent extends LitElement {
  @property() muted: boolean;
  @property() text: string;
}
