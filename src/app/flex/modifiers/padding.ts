import { Attribute, CustomAttributeRegistry } from '@rhtml/custom-attributes';

interface Style {
  padding: string;
}

export class Padding extends Attribute<Style> {

  static options(this: HTMLElement) {
    return {
      name: 'padding',
      registry: new CustomAttributeRegistry(this.shadowRoot)
    };
  }

  OnInit() {
    this.modify();
  }

  OnDestroy() {
    this.setStyles({ padding: null })(this.element)
  }

  OnUpdate() {
    this.modify();
  }

  modify() {
    this.setStyles({ padding: this.value })(this.element)
  }
}
