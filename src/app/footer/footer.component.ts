import { html, css, Component } from '@rxdi/lit-html';

/**
 * @customElement footer-component
 */
@Component({
  selector: 'footer-component',
  useShadow: true,
  style: css`
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #03a9f4;
      color: white;
      text-align: center;
    }
  `,
  template() {
    return html`
      <div class="footer">
        <p>Footer</p>
      </div>
    `;
  }
})
export class FooterComponent extends HTMLElement {}
