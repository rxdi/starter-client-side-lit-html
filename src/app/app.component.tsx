import { Component, OnInit, Inject } from '@rxdi/core';
import { render, html } from 'lit-html';
import { subscribe } from 'lit-rx';
import { from, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { IQuery } from 'src/api-introspection';
import { GraphqlClient } from './graphql/injection.tokens';
import { importQuery } from './graphql/graphql-helpers';

@Component()
export class AppComponent implements OnInit {
  constructor(@Inject(GraphqlClient) private graphql: GraphqlClient) {}

  OnInit() {
    render(
      html`
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
            this.getServerStatus().pipe(
              map(res => JSON.stringify(res.getCrowdsaleInfo, null, 4))
            )
          )}
        </p>
      `,
      document.body
    );
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
