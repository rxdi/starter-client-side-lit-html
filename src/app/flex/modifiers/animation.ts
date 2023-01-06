import { Attribute, CustomAttributeRegistry, Input, Modifier } from '@rhtml/custom-attributes';
import { HostBinding } from '@rhtml/decorators';

import { Animations } from './animate.css';

@Modifier({
  selector: 'animated',
  registry(this: HTMLElement) {
    return new CustomAttributeRegistry(this);
  },
})
export class Animation extends Attribute {
  @Input({ observe: true })
  @HostBinding('style.animationDelay')
  delay: string;

  @HostBinding('class.animated')
  animated: boolean;

  private prevValue: string;

  OnInit() {
    this.animated = true;
    this.prevValue = this.value;
    this.pushStylesToParent();
    this.modify();
  }

  OnDestroy() {
    this.element.classList.remove(this.value);
    this.element.classList.remove(this.prevValue);
    this.animated = false;
  }

  OnUpdate() {
    this.modify();
    this.prevValue = this.value;
  }

  private modify() {
    this.element.classList.remove(this.prevValue);
    this.element.classList.add(this.value);
  }

  private pushStylesToParent() {
    const style = document.createElement('style');
    style.innerHTML = Animations;
    const root = this.parent.shadowRoot ?? this.parent;
    root.prepend(style);
  }
}
