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
import { RouterModule } from "@rxdi/router";

@Module({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: import('./app.component')
            },
            {
                path: 'lazy', component: import('./lazy.component')
            }
        ])
    ]
})
export class AppModule {}
```

#### App Component
src/app/app.component.tsx

```typescript

import { Component, Injector, Container } from "@rxdi/core";
import { Subscription } from "rxjs";
import { h, render, Component as PreactComponent } from 'preact';
import { AppService } from "./app.service";
import { HelloProps, HelloState } from "./app.model";
import { RouteParams, Debounce } from "@rxdi/router";
import { RouterComponent } from "./router.component";

@Component()
export class AppComponent extends PreactComponent<HelloProps, HelloState> {

    @Injector(AppService) private appService: AppService;

    private subscription: Subscription;

    @RouteParams()
    OnBefore(params: RouteParams) {
        render(<AppComponent compiler="TypeScript" framework="PReact" rxdi="@rxdi" routeParams={params} />, document.getElementById('app'));
    }

    render(props: HelloProps, ) {
        debugger
        return <div>
            <RouterComponent>dadada</RouterComponent>
            <h1>Hello from {this.props.compiler}, {this.props.framework} and {this.props.rxdi}!</h1>
            <h1>Reactive Service Counter: {this.state && this.state.value}</h1>
            <h1>Route {this.props.routeParams.route }</h1>
        </div>;
    }

    componentDidMount() {
        this.subscription = this.appService.state.subscribe(state => this.setState(state));
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

}
```

#### App State
```typescript
import { RouteParams } from "@rxdi/router";

export class HelloProps {
    compiler: string;
    framework: string;
    rxdi: string;
    routeParams: RouteParams;
}

export class HelloState {
    value: number;
}

```

#### App Service
```typescript
import { Service } from "@rxdi/core";
import { BehaviorSubject } from "rxjs";
import { HelloState } from "./app.model";
import { Router } from "@rxdi/router";

@Service()
export class AppService {
    count: number = 0;
    state: BehaviorSubject<HelloState> = new BehaviorSubject({ value: 0 });
    constructor(
        private router: Router
    ) {
       const interval = setInterval(() => {
            this.count++
            if (this.count >= 6) {
                this.router.navigate('/home');
                this.router.navigate('/home');
                clearInterval(interval);
            }
            this.state.next({ value: this.count });
        }, 1000);
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
