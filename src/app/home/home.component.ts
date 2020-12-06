import {
  async,
  Component,
  html,
  OnDestroy,
  OnInit,
  OnUpdate,
} from '@rxdi/lit-html';
import { BaseComponent } from '@shared/base.component';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @customElement home-component
 */
@Component({
  selector: 'home-component',
  template(this: HomeComponent) {
    return html`
      <header>
        <h1>Space X mission names:</h1>
      </header>
      <p>${async(this.timer)}</p>
      ${async(
        this.getLaunches().pipe(
          map((launches) =>
            launches.map((launch) => html`<p>${launch.mission_name}</p>`)
          )
        )
      )}
    `;
  },
})
export class HomeComponent
  extends BaseComponent
  implements OnInit, OnDestroy, OnUpdate {
  private timer = timer(100, 1000).pipe(map(() => new Date()));

  OnInit() {
    console.log('Home component init');
  }

  OnDestroy() {
    console.log('Home component destroyed');
  }

  OnUpdate() {
    console.log('Home component updated');
  }

  getLaunches() {
    return this.query({ query: 'launches-past.query.graphql' }).pipe(
      map((res) => res.data.launchesPast)
    );
  }
}
