import { BaseComponent } from '../shared/base.component';
import { html } from 'lit-html';
import { customElement, property } from 'lit-element';
import { subscribe } from 'lit-rx';
import { IUserTokenType } from '../@introspection';
import { Subject, BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Component, Container, Injector, Injectable } from '@rxdi/core';
import '@polymer/paper-spinner/paper-spinner';
import { observable, action } from 'mobx';

const usernameTemplate = label => html`
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      ${label}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      type="text"
      placeholder="${label}"
    />
  </div>
`;

const passwordTemplate = label => html`
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
      ${label}
    </label>
    <input
      class="shadow appearance-none
          border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type=${label}
      placeholder="******************"
    />
    <p class="text-red-500 text-xs italic">Please choose a password.</p>
  </div>
`;



type Constructor<T = {}> = new (...args: any[]) => T;
const ExtendMixin = <TBase extends Constructor>(Base: TBase) =>
  class extends Base {};

const Form = ExtendMixin(ExtendMixin(ExtendMixin(BaseComponent)));

@customElement('login-component')
@Component()
export class LoginComponent extends Form {
  resultomg: Subject<IUserTokenType> = new Subject();

  @property() private loading = false;

  render() {
    return html`
      <div style="margin: 0 auto; width: 350px;">
        ${this.loading
          ? html`
              <div style="width: 20px; margin: 0 auto;">
                <paper-spinner active></paper-spinner>
              </div>
            `
          : html`
              <div class="w-full max-w-xs">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  ${usernameTemplate('imetoo')} ${passwordTemplate('parolataa')}
                  <div class="flex items-center justify-between">
                    <button
                      @click=${() => this.login()}
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
            `}
        <p>
          Email is:
          ${subscribe(this.resultomg.pipe(map(res => res.user.email)))}
        </p>
        <p>
          Token is: ${subscribe(this.resultomg.pipe(map(res => res.token)))}
        </p>
      </div>
    `;
  }

  login() {
    const password = this.querySelector('#password')['value'];
    const email = this.querySelector('#email')['value'];
    this.loading = true;
    return this.mutate({
      mutation: 'login.mutation.graphql',
      variables: { email, password }
    })
      .pipe(map(res => res.data.login))
      .subscribe(
        stream => {
          this.resultomg.next(stream);
          this.loading = false;
        },
        () => (this.loading = false)
      );
  }
}
