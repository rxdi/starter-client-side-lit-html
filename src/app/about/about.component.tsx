import { html, customElement } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';

@customElement('about-component')
@Component()
export class AboutComponent extends BaseComponent {
  render() {
    return html`
        About
    `;
  }
}
