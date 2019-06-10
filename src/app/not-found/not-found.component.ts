import { html, Component } from '@rxdi/lit-html';

/**
 * @customElement not-found-component
 */
@Component({
  selector: 'not-found-component',
  useShadow: true,
  template: () => html`
    <h1>Not found component!</h1>
    <p>Please check your URL.</p>
  `
})
export class NotFoundComponent extends HTMLElement {}
