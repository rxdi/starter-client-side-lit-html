import { BaseComponent } from '../shared/base.component';
import {
  Component,
  OnInit,
  OnDestroy,
  OnUpdate,
  html,
  async
} from '@rxdi/lit-html';
import { timer, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'apollo-link';

/**
 * @customElement home-component
 */
@Component({
  selector: 'home-component',
  template(this: HomeComponent) {
    return html`
      <header>
        <h1>Hello world</h1>
      </header>
      <img
        src="https://www.w3schools.com/html/img_girl.jpg"
        alt="Italian Trulli"
      />
      <p>
        Server status ${async(this.getServerStatus)}
      </p>
      <p>${async(this.timer)}</p>
      <p>
        Crowdsale info ${async(this.getCrowdsaleInfo)}
      </p>
    `;
  }
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy, OnUpdate {
  private timer = timer(100, 1000).pipe(map(() => new Date()));
  private getServerStatus = this.getHomeQuery().pipe(
    map(res => res.status.status)
  );
  private getCrowdsaleInfo = this.getHomeQuery().pipe(
    map(res => JSON.stringify(res.getCrowdsaleInfo, null, 4))
  );

  OnInit() {
    console.log('Home component init');
  }

  OnDestroy() {
    console.log('Home component destroyed');
  }

  OnUpdate() {
    console.log('Home component updated');
  }

  subscription() {
    return this.subscribe({ query: 'home.subscription.graphql' });
  }

  getHomeQuery() {
    return this.query({ query: 'home.query.graphql' }).pipe(
      map(res => res.data)
    );
  }
}
