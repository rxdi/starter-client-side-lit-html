import { LitElement } from 'lit-element';
export class BaseComponent extends LitElement {
  createRenderRoot() {
    return this;
  }
}