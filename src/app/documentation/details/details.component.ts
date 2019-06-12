import {
  html,
  customElement,
  async,
  LitElement,
  property,
  OnInit,
  OnDestroy,
  OnUpdate,
  queryAll
} from '@rxdi/lit-html';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteParams } from '@rxdi/router';

@customElement('details-component', {
  template(this: DetailsComponent) {
    return html`
      <header>
        <h1>${this.name}</h1>
      </header>
      ${async(this.timer)} ${JSON.stringify(this.params)}
      <div>
        1
      </div>
      <div>
        2
      </div>
    `;
  }
})
export class DetailsComponent extends LitElement implements OnInit, OnDestroy, OnUpdate {
  @property() private name: string;

  @RouteParams() private params: any;

  @queryAll('div') private divs: HTMLElement[];

  private timer = timer(1, 1000).pipe(map(v => v));

  OnInit() {
    console.log('DetailsComponent component init');
  }

  OnDestroy() {
    console.log('DetailsComponent component destroyed');
  }

  OnUpdate() {
    console.log('DetailsComponent component updated');
  }
}
