import { html, Component, css } from '@rxdi/lit-html';
import { MainView } from '../shared/styles/margin-top';

/**
 * @customElement not-found-component
 */
@Component({
  selector: 'not-found-component',
  style: css`
    ${MainView}
  `,
  useShadow: true,
  template: () => html`
    <div class="view" style="text-align: center">
      <h1>Not found!</h1>
      <p>Please check your URL.</p>
    </div>
  `
})
export class NotFoundComponent extends HTMLElement {}
