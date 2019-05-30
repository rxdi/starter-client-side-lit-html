import { Component } from "@rxdi/core";
import { html } from "lit-html";
import { subscribe } from "lit-rx";
import { from, timer } from "rxjs";
import { map } from "rxjs/operators";
import { BaseComponent } from "./shared/base.component";
import { Components } from "./shared/components";

@Component()
export class AppComponent extends BaseComponent {
  render() {
    return html`
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
    return this.subscribe({ query: "subscribe.query.graphql" });
  }

  getServerStatus() {
    return this.query({ query: "app.query.graphql" }).pipe(
      map(res => res.data)
    );
  }
}

customElements.define(Components["app-component"], AppComponent);
