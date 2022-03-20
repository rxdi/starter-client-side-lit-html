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

  update(part: AttributePart) {

    const divs = [...part.element.children as never] as HTMLElement[];

    for (const div of divs) {
      this.recursion(div);
    }
    return this.render();
  }

  recursion(div: HTMLElement) {
    const fxFlex = div.getAttribute('fxFlex');

    const fxFlexFill = div.getAttribute('fxFlexFill');
    const fxLayout = div.getAttribute('fxLayout');
    const fxLayoutAlign = div.getAttribute('fxLayoutAlign');
    const fxLayoutGap = div.getAttribute('fxLayoutGap');

    if (this.isAttribute(fxFlex)) {
      this.setChildrensFlex(div)(fxFlex);
    }

    if (this.isAttribute(fxFlexFill)) {
      this.setChildrensFlexFill(div)
    }

    if (this.isAttribute(fxLayout)) {
      this.setFxLayout(div)(fxLayout)
    }

    if (this.isAttribute(fxLayoutAlign)) {
      this.setFxLayoutAlign(div)(fxLayoutAlign)
    }

    if (this.isAttribute(fxLayoutGap)) {
      const divs = [...div.children as never] as HTMLElement[];
      for (const div of divs) {
        div.style['padding'] = `0px ${fxLayoutGap} ${fxLayoutGap} 0px`;
        div.style.flex = '1 1 25%';
      }
    }

    const divs = [...div.children as never] as HTMLElement[];
    for (const div of divs) {
      this.recursion(div);
    }
  }

  private isAttribute(attr: string) {
    return typeof attr === 'string' && (attr || attr === '')
  }

  private setFxLayoutAlign(element: HTMLElement) {
    return (fxLayoutAlign = '') => {
      const [mainAxis, crossAxis] = fxLayoutAlign.split(' ');
      element.style['place-content'] = `${crossAxis} ${mainAxis}`;
      element.style['align-items'] = crossAxis;
      element.style['display'] = 'flex';
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

  private setChildrensFlex(div: HTMLElement) {
    return (fxFlex: string) => {
      div.style['flex'] = '1 1 100%';
      div.style['box-sizing'] = 'border-box';
      if (fxFlex) {
        div.style['max-width'] = fxFlex;
      }
    }
  }
}

export const layout = directive(Layout)();
