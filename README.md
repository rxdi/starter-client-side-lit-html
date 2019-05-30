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


#### index.html

```html
<body>
  <!-- Use navigation component as native web component -->
  <navbar-component counter="5"></navbar-component>
  <main id="outlet">
    <!-- Here Vaadin.Router inserts the current page content -->
  </main>
</body>
```

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

@Module({
  imports: [
    GraphqlModule.forRoot(
      {
        uri: 'https://questups.com/api/graphql'
      },
      DOCUMENTS
    ),
    RouterModule.forRoot('outlet', [
      {
        path: '/',
        component: 'app-component'
        // action: () => import('./app.component')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      },
      //   { path: '/users/:user', component: 'x-user-profile' },
    ])
  ],
  bootstrap: [AppComponent]
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

#### App Component
src/app/app.component.tsx

```typescript
import { Component } from '@rxdi/core';
import { html } from 'lit-html';
import { subscribe } from 'lit-rx';
import { from, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseComponent } from './shared/base.component';
import { customElement } from 'lit-element';

@customElement('app-component')
@Component()
export class AppComponent extends BaseComponent {

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
    return this.subscribe({ query: 'subscribe.query.graphql' });
  }

  getServerStatus() {
    return this.query({ query: 'app.query.graphql' }).pipe(
      map(res => res.data)
    );
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

#### Navbar component
```typescript
import { html, LitElement, property, eventOptions, css, customElement } from 'lit-element';

@customElement('navbar-component')
export class NavbarComponent extends LitElement {
  static styles = css`
  .spacer {
    flex: 1 3 auto;
  }
  `;

  @property() counter = 0;

  render() {
    return html`
      <nav>
        <a href="/"><button>App</button></a>
        <a href="/not-found"><button>Another view</button></a>
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


#### App Query Graphql
src/app/app.query.graphql

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
    'not-found-component'
]);
export type Components = keyof typeof Components;
```