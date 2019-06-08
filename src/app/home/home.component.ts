import { customElement, LitElement, css, property } from '@rxdi/lit-html';
import { globalCSS } from '../../styles';
import { template } from './home.component.html';
import { style } from './home.component.css';

@customElement('home-component', {
  style: css`
    ${globalCSS}
    ${style}
  `,
  template
})
export class HomeComponent extends LitElement {
  @property() showIFrame: boolean;
}
