import { Attribute, CustomAttributeRegistry } from '@rhtml/custom-attributes';

interface Style {
  color: string;
}

export class Color extends Attribute<Style> {

  static options(this: HTMLElement) {
    return {
      name: 'color',
      registry: new CustomAttributeRegistry(this.shadowRoot)
    };
  }

  OnInit() {
    this.modify();
  }

  OnDestroy() {
    this.setStyles({ color: null })(this.element)
  }

  OnUpdate() {
    this.modify();
  }

  modify() {
    this.setStyles({ color: this.value })(this.element)
  }
}
