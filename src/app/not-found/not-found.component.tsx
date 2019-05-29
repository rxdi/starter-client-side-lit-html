import { html } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';

@Component()
class NotFoundView extends BaseComponent {
  render() {
    return html`
      <h1>Not found component!</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }
}

customElements.define('not-found-component', NotFoundView);