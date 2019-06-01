import { BaseComponent } from '../shared/base.component';
import { html } from 'lit-html';
import { customElement } from 'lit-element';
import { subscribe } from 'lit-rx';
import { IUserTokenType } from '../@introspection';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@rxdi/router';
import { Component, Container, Injector } from '@rxdi/core';
import { TestService } from '../test/test.service';

export const usernameTemplate = (label) => html`
  <div class='mb-4'>
    <label class='block text-gray-700 text-sm font-bold mb-2' for='username'>
      ${label}
    </label>
    <input
      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      id='username'
      type=text
      placeholder='${label}'
    />
  </div>
`;

export const passwordTemplate = (label) => html`
  <div class='mb-6'>
    <label class='block text-gray-700 text-sm font-bold mb-2' for='password'>
      ${label}
    </label>
    <input
      class='shadow appearance-none
          border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
      id='password'
      type=${label}
      placeholder='******************'
    />
    <p class='text-red-500 text-xs italic'>Please choose a password.</p>
  </div>
`;

@customElement('login-component')
@Component()
export class LoginComponent extends BaseComponent {
  result: Subject<IUserTokenType> = new Subject();
  router = Router();

  @Injector(TestService)
  private test: TestService;

  render() {
    return html`
      ${subscribe(this.test.gosho2)} Singleton
      <div class='w-full max-w-xs'>
        <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          ${usernameTemplate('imetoo')} ${passwordTemplate('parolataa')}
          <div class='flex items-center justify-between'>
          <button
          @click=${this.go1}
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type=button
        >
          Sign In
        </button>
        <button
        @click=${this.go2}
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        type=button
      >
        Sign In2
      </button>
            <a
              class='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              href='#'
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class='text-center text-gray-500 text-xs'>
          &copy;2019 Acme Corp. All rights reserved.
        </p>
      </div>
      Email is: ${subscribe(this.result.pipe(map(res => res.user.email)))} Token
      is: ${subscribe(this.result.pipe(map(res => res.token)))}
      <button
          @click=${this.onClick}
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type=button
        >
          Sign In
        </button>
    `;
  }

  onClick(e) {
    this.test.gosho(e);
  }

  go1() {
    this.router.go('/app');
  }

  go2() {
    this.router.go('/gosho');
  }
  login() {
    const password = '123456';
    const email = 'kristiqn.tachev@gmail.com';
    this.mutate({
      mutation: 'login.mutation.graphql',
      variables: { email, password }
    })
      .pipe(map(res => res.data.login))
      .subscribe(stream => {
        this.result.next(stream);
        this.router.go('/not-found');
      });
  }
}
