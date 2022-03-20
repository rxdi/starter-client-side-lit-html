import { noChange } from '@rxdi/lit-html';
import { AsyncDirective } from '@rxdi/lit-html/dist/lit-html/async-directive';
import { AttributePart, directive } from '@rxdi/lit-html/dist/lit-html/directive';

type Observable<T> = {
  subscribe(f: (o: T) => void): Subscription;
}

type Subscription = {
  unsubscribe(): void;
}

export type FxLayout = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type MainAxis = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
export type CrossAxis = 'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'baseline';
export type FxLayoutAlign = `${MainAxis} ${CrossAxis}`;

export type Options = { fxLayout: FxLayout, fxLayoutAlign: FxLayoutAlign }

export class Layout extends AsyncDirective {
  subscription: Subscription | undefined;

  render<T>(options?: Observable<Options>) {
    return noChange;
  }
  update(part: AttributePart, [options]: [Observable<Options>]) {
    const fxLayout = part.element.getAttribute('fxLayout');
    const fxLayoutAlign = part.element.getAttribute('fxLayoutAlign');

    const divs = [...part.element.children as never] as HTMLElement[];

    for (const div of divs) {
      const fxFlex = div.getAttribute('fxFlex');
      if (this.isAttribute(fxFlex)) {
        this.setChildrensFlex(div);
      }
    }

    if (this.isAttribute(fxLayout)) {
      this.setFxLayout(part)(fxLayout);
    }

    if (this.isAttribute(fxLayoutAlign)) {
      this.setFxLayoutAlign(part)(fxLayoutAlign)
    }

    this.subscription = options?.subscribe((o) => {
      this.setFxLayout(part)(o.fxLayout);
      this.setFxLayoutAlign(part)(o.fxLayoutAlign)
    });

    return this.render(options);
  }

  disconnected() {
    this.subscription?.unsubscribe();
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

  private setFxLayout(part: AttributePart) {
    return (fxLayout: string = '') => {
      part.element.style['flex-direction'] = fxLayout;
      part.element.style['box-sizing'] = 'flex';
      part.element.style['display'] = 'flex';
    }
  }

  private setFxLayoutAlign(part: AttributePart) {
    return (fxLayoutAlign: string = '') => {
      const [mainAxis, crossAxis] = fxLayoutAlign.split(' ');
      part.element.style['place-content'] = `${crossAxis} ${mainAxis}`;
      part.element.style['align-items'] = crossAxis;
    }
  }

  private isAttribute(attr: string) {
    return typeof attr === 'string' && (attr || attr === '')
  }
}

export const fx = directive(Layout)();
export const fxa = directive(Layout);
