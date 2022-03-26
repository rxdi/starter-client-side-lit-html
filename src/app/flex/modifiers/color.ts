import { Attribute, Modifier } from '@rhtml/custom-attributes';

interface Style {
  color: string;
}

@Modifier({
  selector: 'color',
})
export class Color extends Attribute<Style> {

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
