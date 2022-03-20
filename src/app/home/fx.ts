import { noChange } from '@rxdi/lit-html';
import { AttributePart, Directive, directive } from '@rxdi/lit-html/dist/lit-html/directive';
export type FxLayout = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type MainAxis = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export type CrossAxis = 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'baseline';
export type FxLayoutAlign = `${MainAxis} ${CrossAxis}`;

export class Layout extends Directive {
  render() {
    return noChange;
  }

  setChildrens(options: { fxLayoutGap: string }) {
    return (div: HTMLElement) => {
      const fxFlex = div.getAttribute('fxFlex');
      const fxFlexFill = div.getAttribute('fxFlexFill');
      const fxLayoutAlign = div.getAttribute('fxLayoutAlign');

      if (this.isAttribute(fxFlex)) {
        this.setChildrensFlex(div)(fxFlex);
      }
      if (this.isAttribute(fxFlexFill)) {
        this.setChildrensFlexFill(div);
      }

      if (this.isAttribute(fxLayoutAlign)) {
        this.setFxLayoutAlign(div)(fxLayoutAlign)
      }

      if (this.isAttribute(options.fxLayoutGap)) {
        div.style['padding'] = `0px ${options.fxLayoutGap} ${options.fxLayoutGap} 0px`;
        div.style.flex = '1 1 25%';
        console.log(div)
      }
    }
  }
  update(part: AttributePart) {
    const fxLayout = part.element.getAttribute('fxLayout');
    const fxLayoutAlign = part.element.getAttribute('fxLayoutAlign');
    const fxLayoutGap = part.element.getAttribute('fxLayoutGap');

    const divs = [...part.element.children as never] as HTMLElement[];

    for (const div of divs) {
      this.setChildrens({ fxLayoutGap })(div);
    }

    if (this.isAttribute(fxLayout)) {
      this.setFxLayout(part.element)(fxLayout);
    }

    if (this.isAttribute(fxLayoutAlign)) {
      this.setFxLayoutAlign(part.element)(fxLayoutAlign)
    }

    return this.render();
  }

  private isAttribute(attr: string) {
    return typeof attr === 'string' && (attr || attr === '')
  }

  private setChildrensFlex(div: HTMLElement) {
    return (fxFlex: string) => {
      div.style['flex'] = '1 1 100%';
      div.style['box-sizing'] = 'border-box';
      if (fxFlex) {
        div.style['max-width'] = fxFlex;
      }
    }
  }

  private setChildrensFlexFill(div: HTMLElement) {
    div.style['margin'] = '0';
    div.style['width'] = '100%';
    div.style['height'] = '100%';
    div.style['min-width'] = '100%';
    div.style['min-height	'] = '100%';
  }

  private setFxLayout(element: HTMLElement) {
    return (fxLayout = '') => {
      element.style['flex-direction'] = fxLayout;
      element.style['box-sizing'] = 'flex';
      element.style['display'] = 'flex';
    }
  }

  private setFxLayoutAlign(element: HTMLElement) {
    return (fxLayoutAlign = '') => {
      const [mainAxis, crossAxis] = fxLayoutAlign.split(' ');
      element.style['place-content'] = `${crossAxis} ${mainAxis}`;
      element.style['align-items'] = crossAxis;
      element.style['display'] = 'flex';
    }
  }
}

export const fx = directive(Layout)();
