import { Component, css, html, LitElement } from '@rxdi/lit-html';

/**
 * @customElement footer-component
 */
@Component({
  selector: 'footer-component',
  style: css`
    .footer {
      background-color: #03a9f4;
      color: white;
      text-align: center;
    }
    p {
      margin: 0;
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
export class FooterComponent extends LitElement { }
