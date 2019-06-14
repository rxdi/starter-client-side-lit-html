import {
  html,
  Component,
  LitElement
} from '@rxdi/lit-html';
import { style } from './details.component.css';
import { RouteParams } from '@rxdi/router';
import { UIPackageRouteParams } from '@rxdi/ui-components/markdown-reader/client';

/**
 * @customElement ui-components-details-component
 */
@Component({
  selector: 'ui-components-details-component',
  style,
  template(this: DetailsComponent) {
    return html`
      <markdown-reader
        .namespace=${this.params.namespace}
        .repo=${this.params.repo}
      ></markdown-reader>
    `;
  }
})
export class DetailsComponent extends LitElement {
  @RouteParams()
  private params: UIPackageRouteParams;
}
