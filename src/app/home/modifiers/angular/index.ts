import {
  Component,
  html,
  LitElement,
  property,
  TemplateResult
} from '@rxdi/lit-html';

import { isAttribute, subscribeToAttributeChanges } from '../helpers';

export enum Attributes {
  NgIf = 'ngIf'
}

function recursion(div: HTMLElement) {
  const ngIf = div.getAttribute(Attributes.NgIf);
  if (isAttribute(ngIf)) {
    subscribeToAttributeChanges(Attributes.NgIf)(
      (element) => {
        const attribute = element.getAttribute(Attributes.NgIf);
        console.log(attribute)
        element.style.display = 'none;'
        if (attribute === 'false') {
          element.style.display = 'none';
        } else {
          element.style.display = 'inherit';
        }

      }
    )(div);
  }

  const divs = [...div.children] as HTMLElement[];
  for (const div of divs) {
    recursion.call(this, div);
  }
}

@Component({
  selector: 'angular-layout',
  template() {
    return html`
      <slot></slot>
    `;
  }
})
export class AngularLayout extends LitElement {
  @property()
  child: LitElement;

  OnUpdate(): void {
    const slot = this.shadowRoot.querySelector('slot');
    for (const div of [...slot?.assignedElements()]) {
      recursion.call(this.child, div as never);
    }
  }

  public static modifier(template: TemplateResult): TemplateResult {
    return html`
      <angular-layout .child=${this}>${template}</angular-layout>
    `;
  }
}
