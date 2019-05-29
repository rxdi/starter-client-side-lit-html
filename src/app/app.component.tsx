import { Component, OnInit } from "@rxdi/core";
import { render, html } from "lit-html";
import { subscribe } from "lit-rx";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { IQuery } from "src/api-introspection";

@Component()
export class AppComponent implements OnInit {
  OnInit() {
    render(this.render(), document.body);
  }
  render() {
    return html`
      Server status ${subscribe(from(this.getServerStatus()).pipe(
          map(res => res.status.status)
      ))}
    `;
  }
  async getServerStatus(): Promise<IQuery> {
    return fetch("http://localhost:9000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{status { status }}" })
    })
      .then(res => res.json())
      .then((res: { data: IQuery }) => res.data);
  }
}
