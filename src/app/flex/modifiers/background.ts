import { Attribute, CustomAttributeRegistry } from '@rhtml/custom-attributes';

interface Styles {
  backgroundColor: string;
}

export class Background extends Attribute<Styles> {

  static options(this: HTMLElement) {
    return {
      name: 'background',
      registry: new CustomAttributeRegistry(this.shadowRoot)
    };
  }

  OnInit() {
    this.modify();
  }

  OnDestroy() {
    this.setStyles({ backgroundColor: null })(this.element)
  }

  OnUpdate() {
    this.modify();
  }

  modify() {
    this.setStyles({ backgroundColor: this.value })(this.element)
  }
}
