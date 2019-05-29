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
parcel ./src/index.html --target browser
```

##### Build App
```bash
parcel build ./src/index.html --target browser
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

@Module({
  imports: [
    GraphqlModule.forRoot({
      uri: 'https://questups.com/api/graphql'
    }, DOCUMENTS),
    RouterModule.forRoot('outlet', [
      {
        path: '/',
        component: 'app-component',
        action: () => import('./app.component')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      },
      {
        path: '/not-found',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      }
      //   { path: '/users/:user', component: 'x-user-profile' },
      //   { path: '(.*)', component: 'x-not-found-view' }
    ])
  ]
})
export class AppModule {}
```

#### Base component

```typescript
import { LitElement } from 'lit-element';
export class BaseView extends LitElement {
  createRenderRoot() {
    return this;
  }
}
```

#### App Component
src/app/app.component.tsx

```typescript
import { Component, Injector } from '@rxdi/core';
import { html } from 'lit-html';
import { subscribe } from 'lit-rx';
import { from, timer, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IQuery } from './@introspection';
import { GraphqlClient } from '@rxdi/graphql-client';
import { importQuery } from '@rxdi/graphql-client/dist/graphql-helpers';
import { BaseComponent } from './shared/base.component';

@Component()
export class AppComponent extends BaseComponent {
  @Injector(GraphqlClient) private graphql: GraphqlClient;

  render() {
    return html`
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
        from(this.getServerStatus()).pipe(
          map(res => JSON.stringify(res.getCrowdsaleInfo, null, 4))
        )
      )}
    </p>
  `;
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

customElements.define('app-component', AppComponent);
```

#### Not fund component

```typescript
import { html } from 'lit-element';
import { BaseComponent } from '../shared/base.component';
import { Component } from '@rxdi/core';

@Component()
class NotFoundView extends BaseComponent {
  render() {
    return html`
      <h1>Not found component!</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }
}

customElements.define('not-found-component', NotFoundView);
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