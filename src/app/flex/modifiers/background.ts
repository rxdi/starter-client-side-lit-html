import { Attribute, Modifier } from '@rhtml/custom-attributes';

interface Styles {
  backgroundColor: string;
}

@Modifier({
  selector: 'background',
})
export class Background extends Attribute<Styles> {

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
