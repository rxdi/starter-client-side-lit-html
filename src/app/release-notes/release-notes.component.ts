import {
  html,
  Component,
  LitElement,
  css
} from '@rxdi/lit-html';
import { MainView } from '../shared/styles/margin-top';

@Component({
  selector: 'release-notes-component',
  style: css`
    ${MainView}
  `,
  template(this: ReleaseNotesComponent) {
    return html`
      <div class="view" style="text-align: center">
        1111
      </div>
    `;
  }
})
export class ReleaseNotesComponent extends LitElement {}
