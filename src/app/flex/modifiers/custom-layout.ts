import {
  Attribute,
  Input,
  /*   CustomAttributeRegistry, */
  Modifier
} from '@rhtml/custom-attributes';
import { HostBinding } from '@rhtml/decorators';

@Modifier({
  selector: 'layout'
  /**
   * If "registry" is specified , modifier will create own registry
   * If no registry present on the root component specificed registry will be used
   * If registry present inside the component specified registry will be neglected
   */
  // registry(this) {
  //   return new CustomAttributeRegistry(this.shadowRoot)
  // }
})
export class CustomLayout extends Attribute {
  @Input({ observe: true })
  @HostBinding('style.padding')
  padding: string;

  @Input({ observe: true })
  @HostBinding('style.color')
  color: string;

  @Input({ observe: true })
  @HostBinding('style.background')
  background: string;
}
