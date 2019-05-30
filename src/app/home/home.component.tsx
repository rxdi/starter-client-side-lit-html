import { html, customElement } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component, Injector } from '@rxdi/core';
import { timer, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { subscribe } from 'lit-rx';

@customElement('home-component')
@Component()
export class HomeComponent extends BaseComponent {
  render() {
    return html`
      <header>
        <h1>Hello world</h1>
      </header>
      <p>
        Server status
        ${subscribe(this.getServerStatus().pipe(map(res => res.status.status)))}
      </p>
      <p>${subscribe(timer(100, 1000).pipe(map(() => new Date())))}</p>
      <p>
        Crowdsale info
        ${subscribe(
          from(this.getServerStatus()).pipe(
            map(res => JSON.stringify(res.getCrowdsaleInfo, null, 4))
          )
        )}
      </p>
    `;
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
