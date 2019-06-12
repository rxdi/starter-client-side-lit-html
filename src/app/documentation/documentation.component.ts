import {
  html,
  async,
  LitElement,
  property,
  OnInit,
  OnDestroy,
  OnUpdate,
  queryAll,
  Component
} from '@rxdi/lit-html';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteParams } from '@rxdi/router';
import { MainView } from '../shared/styles/margin-top';

@Component({
  selector: 'documentation-component',
  style: MainView,
  template(this: DocumentationComponent) {
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
export class DocumentationComponent extends LitElement implements OnInit, OnDestroy, OnUpdate {
  @property() private name: string;

  @RouteParams() private params: any;

  @queryAll('div') private divs: HTMLElement[];

  private timer = timer(1, 1000).pipe(map(v => v));

  OnInit() {
    console.log('DocumentationComponent component init');
  }

  OnDestroy() {
    console.log('DocumentationComponent component destroyed');
  }

  OnUpdate() {
    console.log('DocumentationComponent component updated');
  }
}
