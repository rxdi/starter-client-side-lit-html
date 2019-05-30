import { html, customElement } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';

@customElement('footer-component')
@Component()
export class FooterComponent extends BaseComponent {
  render() {
    return html`
      Footer
    `;
  }
}
