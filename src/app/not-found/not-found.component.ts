import { html, customElement } from '@rxdi/lit-html';

@customElement('not-found-component', {
  template: () => html`
    <h1>Not found component!</h1>
    <p>Please check your URL.</p>
  `
})
export class NotFoundComponent extends HTMLElement {}
