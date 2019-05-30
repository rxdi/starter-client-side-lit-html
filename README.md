# @rxdi/starter-client-lit-html
## Starter project with graphql, lit-html, apollo-boost, @vaadin/router, @webcomponents/custom-elements based on @rxdi/core
## Powerful Dependency Injection inside Browser and Node using Typescript and RXJS 6
***
> The idea behind [@rxdi](https://github.com/rxdi) is to create independent, dependency injection that can be used everywhere,
> Node and Browser with purpose also to share the same code without chainging nothing!
> First steps where with platform called [@gapi](https://github.com/Stradivario/gapi) you can check repository [@gapi/core](https://github.com/Stradivario/gapi-core).
> Then because of the needs of the platform i decided to develop this Reactive Dependency Injection container helping me build progressive applications.
> Hope you like my journey!
> Any help and suggestions are appreciated!
Main repository [@rxdi/core](https://github.com/rxdi/core) 
***
### Installation and basic examples:

##### To start developing, run:

```bash
git clone https://github.com/rxdi/starter-client-lit-html
```
##### Install modules:

```bash
npm install
```

##### Optional
Using VSCode there are extensions helping productivity with lit-html

[lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)
```bash
code --install-extension runem.lit-plugin
```

[lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)
```bash
code --install-extension bierner.lit-html
```
##### Running App

For starting and building application we will use Parcel a new configuration-less web bundler [ParcelJS](https://parceljs.org/)

To install parcel type:

```bash
npm install -g parcel-bundler
```

##### Start App
```bash
parcel ./src/index.html
```

##### Build App
```bash
parcel build ./src/index.html
```

## Simplest app




#### Main starting point

src/main.ts
```typescript
import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';

window.addEventListener('load', () => {
  Bootstrap(AppModule, {
    init: false,
    initOptions: {
      services: true
    }
  }).subscribe(() => console.log('App Started!'), err => console.error(err));
});

if (module['hot']) {
  module['hot'].dispose(() => (document.body.innerHTML = ''));
}
```

#### App Module

src/app/app.module.ts

```typescript
import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Components } from './shared/components';

@Module({
  components: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    GraphqlModule.forRoot(
      {
        uri: 'https://questups.com/api/graphql'
      },
      DOCUMENTS
    ),
    RouterModule.forRoot<Components>([
      {
        path: '/',
        component: 'home-component'
      },
      {
        path: '/about',
        component: 'about-component',
        action: () => import('./about/about.component')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      }
      //   { path: '/users/:user', component: 'x-user-profile' },
    ])
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```


#### Base component

```typescript
import { GraphqlElement } from './graphql.component';

export class BaseComponent extends GraphqlElement {
  createRenderRoot() {
    return this;
  }
}

```


#### index.html shoud have defined `body` tag since `app-component` will be rendered inside

```html
<body></body>
```


#### When RouterModule is set we can put our component `<router-component></router-component>` inside `AppComponent`
Inside `header` and `footer` you can insert component which will be rendered with `unsafeHTML(html'<navbar-component></navbar-component>')` after the Router is initialized.

```html
    <router-outlet
      header="<navbar-component></navbar-component>"
      footer="<footer-component></footer-component>"
    >
    </router-outlet>
```

> Note! Components needs to be bootstraped inside `AppModule` before using them or nothing will be rendered

```typescript
@Module({
  components: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
})
export class AppModule {}
```

#### App Component
src/app/app.component.tsx

```typescript
import { Component } from '@rxdi/core';
import { html, render } from 'lit-html';
import '@rxdi/router';

@Component()
export class AppComponent {
  OnInit() {
    render(
      html`
        <router-outlet
          header=${this.getHeader().getHTML()}
          footer=${this.getFooter().getHTML()}
        >
        </router-outlet>
      `,
      document.body
    );
  }

  getFooter() {
    return html`
      <footer-component></footer-component>
    `;
  }

  getHeader() {
    return html`
      <navbar-component></navbar-component>
    `;
  }
}

```


#### Navbar component
```typescript
import {
  html,
  LitElement,
  property,
  eventOptions,
  css,
  customElement
} from 'lit-element';
import { Component, Container } from '@rxdi/core';
import { Router, Outlet } from '@rxdi/router';
import { subscribe } from 'lit-rx';

@customElement('navbar-component')
@Component()
export class NavbarComponent extends LitElement {
  static styles = css`
    .spacer {
      flex: 1 3 auto;
    }
  `;


  @property() counter = 0;

  @Router()
  router: Outlet;

  render() {
    return html`
      <nav>
        <a @click=${() => this.router.go('/')}><button>Home</button></a>
        <a @click=${() => this.router.go('/about')}><button>About</button></a>
      </nav>
      <div style="display:flex">
        <button @click=${this.onIncrement}>Increment</button>
        <button @click=${this.onDecrement}>Decrement</button>
        ${this.counter}
      </div>
    `;
  }

  @eventOptions({ capture: true })
  onIncrement(e: Event) {
    this.counter++;
  }

  @eventOptions({ capture: true })
  onDecrement(e: Event) {
    this.counter--;
  }
}

```


#### About Component
src/app/app.component.tsx

```typescript
import { html, customElement } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';

@customElement('about-component')
@Component()
export class AboutComponent extends BaseComponent {
  render() {
    return html`
        About
    `;
  }
}

```


#### Home Component
src/app/app.component.tsx

```typescript
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

```


#### Home Graphql queries
Batch of `getCrowdsaleInfo` and `status` queries
```graphql
query {
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
```
subscribeToUserMessagesBasic
```graphql
subscription {
  subscribeToUserMessagesBasic {
    message
  }
}
```



#### Footer component

```typescript
import { html, customElement } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';

@customElement('footer-component')
@Component()
export class FooterComponent extends BaseComponent {
  render() {
    return html`
      Footer
    `;
  }
}

```

#### Not fund component

```typescript
import { html, customElement } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';

@customElement('not-found-component')
@Component()
class NotFoundComponent extends BaseComponent {
  render() {
    return html`
      <h1>Not found component!</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }
}
```

#### Graphql Component

```typescript
import { Container } from "@rxdi/core";
import { LitElement } from "lit-element";
import { GraphqlClient } from "@rxdi/graphql-client";
import {
  QueryOptions,
  MutationOptions,
  SubscriptionOptions
} from "apollo-boost";
import { importQuery } from "@rxdi/graphql-client/dist/graphql-helpers";
import { DocumentTypes } from "../@introspection/documentTypes";
import { from, Observable } from "rxjs";
import { IQuery, IMutation, ISubscription } from "../@introspection";

interface ImportQueryMixin extends QueryOptions {
  query: DocumentTypes;
}

interface ImportSubscriptionMixin extends SubscriptionOptions {
  query: DocumentTypes;
}

interface ImportMutationMixin extends MutationOptions {
  mutation: DocumentTypes;
}

export class GraphqlComponent extends LitElement {
  public graphql: GraphqlClient = Container.get(GraphqlClient);

  query<T = IQuery>(options: ImportQueryMixin) {
    options.query = importQuery(options.query);
    return from((this.graphql.query.bind(this.graphql)(options) as any)) as Observable<{ data: T }>;
  }

  mutate<T = IMutation>(options: ImportMutationMixin) {
    options.mutation = importQuery(options.mutation);
    return from((this.graphql.mutate.bind(this.graphql)(options) as any)) as Observable<{ data: T }>;
  }

  subscribe<T = ISubscription>(options: ImportSubscriptionMixin) {
    options.query = importQuery(options.query);
    return from((this.graphql.subscribe.bind(this.graphql)(options) as any)) as Observable<{ data: T }>;
  }
}

```



#### Components.ts 
List of all components inside the platform.

```typescript

function strEnum<T extends string>(o: Array<T>): {[K in T]: K} {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
export const Components = strEnum([
    'app-component',
    'not-found-component',
    'navbar-component',
    'home-component',
    'about-component'
]);
export type Components = keyof typeof Components;

```
