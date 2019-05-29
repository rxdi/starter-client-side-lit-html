import { Component, Injector } from '@rxdi/core';
import { html } from 'lit-html';
import { subscribe } from 'lit-rx';
import { from, timer, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IQuery } from './@introspection';
import { GraphqlClient } from '@rxdi/graphql-client';
import { importQuery } from '@rxdi/graphql-client/dist/graphql-helpers';
import { BaseComponent } from './shared/base.component';

@Component()
export class AppComponent extends BaseComponent {
  @Injector(GraphqlClient) private graphql: GraphqlClient;

  render() {
    return html`
    <p>
      Server status
      ${subscribe(
        this.getServerStatus().pipe(map(res => res.status.status))
      )}
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

  getServerStatus = () => {
    return from(
      this.graphql.query<IQuery>({
        query: importQuery('app.query.graphql')
      })
    ).pipe(
      map(res => res.data),
      map(res => res)
    );
  };
}

customElements.define('app-component', AppComponent);