import { Component, OnInit, Inject } from "@rxdi/core";
import { render, html } from "lit-html";
import { subscribe } from "lit-rx";
import { from, timer } from "rxjs";
import { map } from "rxjs/operators";
import { IQuery } from "src/api-introspection";
import { GraphqlClient } from "./graphql/injection.tokens";
import gql from "graphql-tag";

@Component()
export class AppComponent implements OnInit {
  constructor(@Inject(GraphqlClient) private graphql: GraphqlClient) {}

  OnInit() {
    render(
      html`
        Server status ${subscribe(this.getServerStatus())} <br />
        ${subscribe(timer(100, 1000).pipe(map(() => new Date())))}
      `,
      document.body
    );
  }

  getServerStatus = () => {
    return from(
      this.graphql.query<IQuery>({
        query: gql`
          {
            status {
              status
            }
            getCrowdsaleInfo {
              startTime
              endTime
              hasEnded
              token
              weiRaised
              wallet
            }
          }
        `
      })
    ).pipe(
      map(res => res.data),
      map(res => res.status.status)
    );
  };
}
