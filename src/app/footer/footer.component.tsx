import { html } from 'lit-element';
import { customElement } from '@rxdi/lit-html';

@customElement('footer-component', {
  template: () => html`
    <style>
      .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #03a9f4;
        color: white;
        text-align: center;
      }
    </style>
    <div class="footer">
      <p>Footer</p>
    </div>
  `
})
export class FooterComponent extends HTMLElement {}
