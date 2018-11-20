# @rxdi/starter-client-rxdi-router-preact
## Starter project with PReact based on @rxdi/core
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
git clone https://github.com/rxdi/starter-client-rxdi-router-preact
```
##### Install modules:

```bash
npm install
```
##### Running App

For starting and building application we will use Parcel a new configuration-less web bundler [ParcelJS](https://parceljs.org/)

This project is with added ReactJS and when builded for production bundle is less than 800Kb!!

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

@Module({
    bootstrap: [AppComponent]
})
export class AppModule {}
```

#### App Component
src/app/app.component.tsx

```typescript

import { Component } from "@rxdi/core";
import { h, render, Component as PreactComponent } from 'preact';
import AsyncRoute from 'preact-async-route';
import { Router, Link } from 'preact-router';

@Component()
export class AppComponent extends PreactComponent {

    OnBefore() {
        render(<AppComponent />, document.body);
    }

    render() {
        return <div>
            <nav>
                <Link activeClassName="active" href="/">Home</Link>
                <Link activeClassName="active" href="/about">About</Link>
            </nav>
            <Router>
                <AsyncRoute
                    path="/"
                    getComponent={this.getHomeComponent}
                    loading={() => <div>loading...</div>}
                />
                <AsyncRoute
                    path="/about"
                    getComponent={this.getAboutComponent}
                    loading={() => <div>loading...</div>}
                />
            </Router>
        </div>
    }

    async getAboutComponent() {
        return (await import('./about/about.component')).AboutComponent;
    }
    async getHomeComponent() {
        return (await import('./home/home.component')).HomeComponent;
    }

}
```

#### About
```typescript

import { Component } from "@rxdi/core";
import { h, Component as PreactComponent } from 'preact';

@Component()
export class AboutComponent extends PreactComponent<any> {

    render() {
        return <div>
            <h1>About </h1>
            <h1>Yey</h1>
        </div>;
    }
}
```

#### Home
```typescript

import { Component } from "@rxdi/core";
import { h, Component as PreactComponent } from 'preact';

@Component()
export class HomeComponent extends PreactComponent {
    render() {
        return <div>
            <h1>Lazy routed module </h1>
            <h1>Route: </h1>
        </div>;
    }
}
```

#### Notes

`@Injector()` - Decorator also can be used which will depend imediately instance of Class can be used as follow

```typescript
@Component()
export class AppComponent extends PreactComponent<any, any> {
    @Injector(AppService) private appService: AppService;
}
```

`InjectSoft` - Function is added due to problem when extending `React.Component or Preact Component` class.

Dependencies are not resolved and extended correctly by React.Component class.This is temporary solution for injecting Services when constructor is intialized and setting properties to correct constructor.

Except `@Component()` when extending `React.Component` all other decorators work as expected depending inside constructor.

When using NodeJS reamains unchanged

Later releases will be created separated class extending react and will be inside othe repository `@rxdi/reactive-components`
Can be extended as follow

```typescript
import { Component } from "@rxdi/core";
import { ReactComponent } from "@rxdi/reactive-components";
import { ReactiveService } from "../components/react.service";

@Component()
export class AppComponent extends ReactComponent<any, any> {

    // private reactiveService: ReactiveService = InjectSoft(ReactiveService); older version

    constructor(
        private reactiveService: ReactiveService
    ) {
        super();
    }

}
```
