import { Component, OnInit } from "@rxdi/core";
import { render, html } from "lit-html";
import { subscribe } from "lit-rx";
import { from, Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { IQuery } from "src/api-introspection";
import { GraphqlService } from "./common/helpers/graphql.service";

@Component()
export class AppComponent implements OnInit {

  constructor(
    private graphql: GraphqlService
  ) {}
 
  OnInit() {
    this.render(`Hello world`)
  }

  render(state: string) {
    const template = html`
      ${state} ${subscribe(timer(100, 1000))} <br> Server status ${subscribe(this.getServerStatus())}
    `;
    render(template, document.body)
  }

  getServerStatus(): Observable<string> {
    return from(
      this.graphql.fetch('{ status { status } }')
    ).pipe(
      map((res: { data: IQuery }) => res.data),
      map(res => res.status.status)
    );
  }

}
