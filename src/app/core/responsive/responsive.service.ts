import { Injectable } from '@rxdi/core';
import { of, BehaviorSubject } from 'rxjs';
import { combineLatest, map } from 'rxjs/operators';

@Injectable({ init: true })
export class ResponsiveService {
  width: BehaviorSubject<number> = new BehaviorSubject(
    document.body.clientWidth
  );
  height: BehaviorSubject<number> = new BehaviorSubject(
    document.body.clientHeight
  );

  constructor() {
    window.addEventListener('resize', () => this.setWindowSize());
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
