import {
  Attribute,
  /*   CustomAttributeRegistry, */
  Modifier
} from '@rhtml/custom-attributes';

interface Style {
  padding: string;
}

@Modifier({
  selector: 'padding'
  /**
   * If "registry" is specified , modifier will create own registry
   * If no registry present on the root component this will be used
   * If registry present inside the component this will be neglected
   */
  // registry(this) {
  //   return new CustomAttributeRegistry(this.shadowRoot)
  // }
})
export class Padding extends Attribute<Style> {
  OnInit() {
    this.modify();
  }

  OnDestroy() {
    this.setStyles({ padding: null })(this.element);
  }

  OnUpdate() {
    this.modify();
  }

  modify() {
    this.setStyles({ padding: this.value })(this.element);
  }
}
