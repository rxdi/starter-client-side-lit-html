import { noChange } from '@rxdi/lit-html';
import { AttributePart, Directive, directive } from '@rxdi/lit-html/dist/lit-html/directive';
export type FxLayout = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type MainAxis = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export type CrossAxis = 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'baseline';
export type FxLayoutAlign = `${MainAxis} ${CrossAxis}`;

export class Layout extends Directive {
  render(_fxLayout: FxLayout) {
    return noChange;
  }
  update(part: AttributePart, [fxLayout]: [FxLayout]) {
    part.element.style['flex-direction'] = fxLayout;
    part.element.style['box-sizing'] = 'flex';
    part.element.style['display'] = 'flex';
    return this.render(fxLayout);
  }
}


export class LayoutAlign extends Directive {
  render(_fxLayoutAlign: FxLayoutAlign) {
    return noChange;
  }

  update(part: AttributePart, [fxLayoutAlign]: [FxLayoutAlign]) {
    const [mainAxis, crossAxis] = fxLayoutAlign.split(' ');
    part.element.style['place-content'] = `${crossAxis} ${mainAxis}`;
    part.element.style['align-items'] = crossAxis;
    part.element.style['display'] = 'flex';
    return this.render(fxLayoutAlign)
  }
}

export class LayoutGap extends Directive {
  render(_gap: string) {
    return noChange;
  }

  update(part: AttributePart, [_gap]: [string]) {
    const divs = [...part.element.children as never] as HTMLElement[];
    for (const div of divs) {
      div.style['padding'] = `0px ${_gap} ${_gap} 0px`;
      div.style.flex = '1 1 25%';
    }
    return this.render(_gap)
  }
}

export class LayoutFlexFill extends Directive {
  render() {
    return noChange;
  }

  update(part: AttributePart) {
    part.element.style['margin'] = '0';
    part.element.style['width'] = '100%';
    part.element.style['height'] = '100%';
    part.element.style['min-width'] = '100%';
    part.element.style['min-height	'] = '100%';
    return this.render()
  }
}

export const fxLayout = directive(Layout);
export const fxLayoutAlign = directive(LayoutAlign);
export const fxLayoutGap = directive(LayoutGap);
export const fxFlexFill = directive(LayoutFlexFill)();
