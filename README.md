# @rxdi/starter-client-lit-html
## Starter project with LIT-HTML based on @rxdi/core
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

Bootstrap(AppModule, {
    init: false,
    initOptions: {
        services: true,
    },
    logger: {
        logging: true,
        date: true,
        hashes: true,
        exitHandler: true,
        fileService: true
    }
})
.subscribe(
    () => console.log('Started!'),
    (e) => console.error(e)
);
```

#### App Module

src/app/app.module.ts

```typescript
import { Module } from "@rxdi/core";
import { AppComponent } from "./app.component";
import { GraphqlModule } from "./graphql/graphql.module";

@Module({
  imports: [
    GraphqlModule.forRoot({
      uri: "https://questups.com/api/graphql"
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```

#### App Component
src/app/app.component.tsx

```typescript
import { Component, OnInit, Inject } from '@rxdi/core';
import { render, html } from 'lit-html';
import { subscribe } from 'lit-rx';
import { from, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { IQuery } from 'src/api-introspection';
import { GraphqlClient } from './graphql/injection.tokens';
import { importQuery } from './graphql/graphql-helpers';

@Component()
export class AppComponent implements OnInit {
  constructor(@Inject(GraphqlClient) private graphql: GraphqlClient) {}

  OnInit() {
    render(
      html`
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
            this.getServerStatus().pipe(
              map(res => JSON.stringify(res.getCrowdsaleInfo, null, 4))
            )
          )}
        </p>
      `,
      document.body
    );
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