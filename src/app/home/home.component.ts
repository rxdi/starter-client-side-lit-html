import { customElement, LitElement, css, property } from '@rxdi/lit-html';
import { template } from './home.component.html';
import { style } from './home.component.css';

@customElement('home-component', {
  style: css`
    ${style}
  `,
  template
})
export class HomeComponent extends LitElement {
  @property() showIFrame: boolean;
}
