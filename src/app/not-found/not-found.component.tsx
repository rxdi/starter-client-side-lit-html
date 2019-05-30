import { html } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';
import { Components } from '../shared/components';

@Component()
class NotFoundComponent extends BaseComponent {
  render() {
    return html`
      <h1>Not found component!</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }
}

customElements.define(Components["not-found-component"], NotFoundComponent);
