import {
  classMap,
  Component,
  html,
  LitElement,
  property,
  css
} from '@rxdi/lit-html';

/**
 * @customElement app-button
 */
@Component({
  selector: 'app-button',
  style: css`
    .container {
      padding: 14px;
      text-align: center;
      min-width: 100px;
      font-weight: 500;
    }

    .button {
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      cursor: pointer;
      color: white;
      transition: background 0.8s;
      user-select: none;
      .active {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      }
    }

    .button:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      background: #a6463e;
    }

    .button:active {
      background-color: #c0998d;
      background-size: 100%;
      transition: background 0s;
    }

    .button:focus {
      outline: 0 !important;
    }

    .active {
      background-color: #bc471f;
    }

    .muted {
      background-color: none;
    }
  `,
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
