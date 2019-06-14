import { Injectable } from '@rxdi/core';
import { of, BehaviorSubject, fromEvent, Subscription, Observable } from 'rxjs';
import { combineLatest, map, debounceTime } from 'rxjs/operators';

@Injectable({ init: true })
export class ResponsiveService {
  width: BehaviorSubject<number> = new BehaviorSubject(
    document.body.clientWidth
  );
  height: BehaviorSubject<number> = new BehaviorSubject(
    document.body.clientHeight
  );
  private readonly scrollDebounceTime = 10;
  scrollSubscription: Observable<Event> = fromEvent(window, 'scroll').pipe(debounceTime(this.scrollDebounceTime));
  activeId: number;
  isPositionFixed = true;
  private readonly scrollTopOffset = 100;

  constructor() {
    window.addEventListener('resize', () => this.setWindowSize());
  }

  lookupHeadings(contentReference: ShadowRoot) {
    if (!contentReference) {
      return;
    }
    const headings = contentReference.querySelectorAll('h3, h4');
    const removeAnchor = (text: string) => {
      const anchorId = text && text.indexOf('#');
      return anchorId >= 0 ? text.slice(0, anchorId) : text;
    };
    return Array.from(headings).map((item: HTMLElement) => ({
      offsetTop: item.offsetTop,
      textContent: removeAnchor(item.textContent),
      elementRef: item,
    }));
  }


  findCurrentHeading(headings) {
    const marginOffset = 15;
    for (let i = 0; i < headings.length; i++) {
      if (headings.length - 1 === i) {
        return this.activeId = i;
      } else if (
        headings[i + 1].offsetTop >=
        window.pageYOffset + this.scrollTopOffset + marginOffset
      ) {
        return this.activeId = i;
      }
    }
  }


  navigateToAnchor(elementRef: HTMLElement) {
    if (elementRef) {
      elementRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  private setWindowSize() {
    this.height.next(document.body.clientHeight);
    this.width.next(document.body.clientWidth);
  }

  getBoth() {
    return {
      width: this.width.getValue(),
      height: this.height.getValue()
    };
  }

  combineBoth() {
    return of(this.getBoth()).pipe(
      combineLatest(this.height, this.width),
      map(() => this.getBoth())
    );
  }
}
