import { BaseComponent } from '../shared/base.component';
import { customElement, OnInit, OnDestroy, OnUpdate, html, async } from '@rxdi/lit-html';
import { timer, from } from 'rxjs';
import { map } from 'rxjs/operators';

@customElement('home-component', {
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
        Server status
        ${async(this.getServerStatus().pipe(map(res => res.status.status)))}
      </p>
      <p>${async(timer(100, 1000).pipe(map(() => new Date())))}</p>
      <p>
        Crowdsale info
        ${async(
          from(this.getServerStatus()).pipe(
            map(res => JSON.stringify(res.getCrowdsaleInfo, null, 4))
          )
        )}
      </p>
    `;
  }
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy, OnUpdate {
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

  getServerStatus() {
    return this.query({ query: 'home.query.graphql' }).pipe(
      map(res => res.data)
    );
  }
}

console.log(HomeComponent['is']());
