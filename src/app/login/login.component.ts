import { BaseComponent } from "../shared/base.component";
import { html } from "lit-html";
import { Component, Container } from "@rxdi/core";
import { customElement } from "lit-element";
import { subscribe } from "lit-rx";
import { IUserTokenType } from "../@introspection";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { VaadinRouter } from "@rxdi/router";
import { Router } from '@vaadin/router';

export const username = (label = 'Username') => html`
<div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              ${label}
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="${label}"
            />
          </div>
`

export const password = (label = 'Password') => html`
<div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              ${label}
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="${label}"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
`

@customElement('login-component')
@Component()
export class LoginComponent extends BaseComponent {
  result: Subject<IUserTokenType> = new Subject();
  router = Container.get(VaadinRouter)
  render() {
    return html`
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          ${username('imetoo')}
          ${password('parolataa')}
          <div class="flex items-center justify-between">
            <button
              @click=${this.login}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2019 Acme Corp. All rights reserved.
        </p>
      </div>
      Email is: ${subscribe(this.result.pipe(
          map(res => res.user.email)
      ))}
      Token is:  ${subscribe(this.result.pipe(
          map(res => res.token)
      ))}
    `;
  }

  login() {
    const password = '123456';
    const email = 'kristiqn.tachev@gmail.com';
    this;
    this.mutate({ mutation: 'login.mutation.graphql', variables: {email, password}}).pipe(
        map(res => res.data.login)
    ).subscribe(stream => {
        this.result.next(stream);
        debugger
        Router.go('/not-found')
        debugger
    })
  }
}
