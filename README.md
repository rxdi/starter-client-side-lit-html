# @rxdi/starter-client-lit-html

## Starter project with graphql, lit-html, apollo-graphql, @vaadin/router, @webcomponents/custom-elements based on @rxdi/core

## Powerful Dependency Injection inside Browser and Node using Typescript and RXJS 6

---

> The idea behind [@rxdi](https://github.com/rxdi) is to create independent, dependency injection that can be used everywhere,
> Node and Browser with purpose also to share the same code without chainging nothing!
> First steps where with platform called [@gapi](https://github.com/Stradivario/gapi) you can check repository [@gapi/core](https://github.com/Stradivario/gapi-core).
> Then because of the needs of the platform i decided to develop this Reactive Dependency Injection container helping me build progressive applications.
> Hope you like my journey!
> Any help and suggestions are appreciated!
> Main repository [@rxdi/core](https://github.com/rxdi/rxdi-monorepo)

---

This starter can be used with every component library working with WebComponent specification
For example web component can be created and defined using `customElements.define()`
and imported inside the bundle

```typescript
import 'my-component';
```

After the import it is globally available and can be used all over the application using the tag provided

Set of webcomponents can be found at [@rxdi/ui-kit](https://github.com/rxdi/ui-kit)

[Demo Application](https://rxdi-pwa.firebaseapp.com/)

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

##### Using `@gapi/cli` schematics

```bash
npm i -g @gapi/cli
```

`gapi generate [name]` generates the specified schematic

## Available Schematics:

- component
- directive
- guard
- module
- provider
- service

## Options

`--dry-run (alias: -d)`

`--force (alias: -f)`

Current settings for schematics are defined inside `gapi-cli.conf.yml`
Information can be found [here](https://github.com/Stradivario/gapi-cli/wiki/generate)

```yml
config:
  schematics:
    name: @rxdi/schematics
    dryRun: false
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
  }).subscribe(
    () => console.log('App Started!'),
    (err) => console.error(err)
  );
});

if (module['hot']) {
  module['hot'].dispose(() => (document.body.innerHTML = ''));
}
```

#### App Module

src/app/app.module.ts

```typescript
import { Module } from '@rxdi/core';
import {
  GraphqlModule,
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { State } from './app.state';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GraphQLRequest } from 'apollo-link';
import { introspectionQueryResultData } from '~/@introspection/fragmentTypes';

@Module({
  components: [NavbarComponent, HomeComponent, FooterComponent],
  imports: [
    GraphqlModule.forRoot(
      {
        async onRequest(this: GraphQLRequest) {
          return new Headers();
        },
        cache: new InMemoryCache({
          fragmentMatcher: new IntrospectionFragmentMatcher({
            introspectionQueryResultData,
          }),
        }),
        uri: 'https://api.spacex.land/graphql/',
        pubsub: 'wss://pubsub.graphql-server.com/subscriptions',
      },
      DOCUMENTS
    ),
    RouterModule.forRoot(
      [
        {
          path: '/',
          component: HomeComponent,
        },
        {
          path: '/about',
          children: () => import('./about/about.module'),
        },
        {
          path: '(.*)',
          component: 'not-found-component',
          action: () => import('./not-found/not-found.component'),
        },
        //   { path: '/users/:user', component: 'x-user-profile' },
      ],
      { log: true }
    ),
  ],
  bootstrap: [AppComponent],
  providers: [State],
})
export class AppModule {}
```

#### Base Graphql Layer

```typescript
import { Injector } from '@rxdi/core';
import {
  ApolloClient,
  DataProxy,
  importQuery,
  MutationOptions,
  QueryOptions,
  SubscriptionOptions,
} from '@rxdi/graphql-client';
import { from, Observable } from 'rxjs';

import { IMutation, IQuery, ISubscription } from '~/@introspection';
import { DocumentTypes } from '~/@introspection/documentTypes';

type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface ImportQueryMixin extends Without<QueryOptions, 'query'> {
  query: DocumentTypes;
}

interface ImportSubscriptionMixin
  extends Without<SubscriptionOptions, 'query'> {
  query: DocumentTypes;
}

interface ImportMutationMixin extends Without<MutationOptions, 'mutation'> {
  mutation: DocumentTypes;
  update?(proxy: DataProxy, res: { data: IMutation }): void;
}

export class BaseGraphqlLayer {
  @Injector(ApolloClient) public graphql: ApolloClient;

  query<T = IQuery>(options: ImportQueryMixin) {
    options.query = importQuery(options.query);
    return from(this.graphql.query(options as never)) as Observable<{
      data: T;
    }>;
  }

  mutate<T = IMutation>(options: ImportMutationMixin) {
    options.mutation = importQuery(options.mutation);
    return from(this.graphql.mutate(options as never)) as Observable<{
      data: T;
    }>;
  }

  subscribe<T = ISubscription>(options: ImportSubscriptionMixin) {
    options.query = importQuery(options.query);
    return from(this.graphql.subscribe(options as never)) as Observable<{
      data: T;
    }>;
  }
}
```

#### index.html shoud have defined `body` tag since `app-component` will be rendered inside

```html
<body></body>
```

#### When RouterModule is set we can put our component `<router-component></router-component>` inside `AppComponent`

```html
<router-outlet>
  <navbar-component slot="header"></navbar-component>
  <footer-component slot="footer"></footer-component>
</router-outlet>
```

> Note! Components needs to be bootstraped inside `AppModule` before using them or nothing will be rendered

```typescript
@Module({
  components: [NavbarComponent, FooterComponent, HomeComponent],
})
export class AppModule {}
```

> Another way of importing modules is directly inside the Component `import './your.component.ts';`;

#### App Component

src/app/app.component.ts

```typescript
import { Inject } from '@rxdi/core';
import { html, Component } from '@rxdi/lit-html';
import { State } from './app.state';

/**
 * @customElement app-component
 */
@Component({
  selector: 'app-component',
  template() {
    return html`
      <router-outlet>
        <navbar-component slot="header"></navbar-component>
        <footer-component slot="footer"></footer-component>
      </router-outlet>
    `;
  },
  container: document.body,
})
export class AppComponent extends HTMLElement {
  @Inject(State) private state: State;
}
```

#### Navbar component

```typescript
import { Router } from '@rxdi/router';
import {
  html,
  property,
  eventOptions,
  css,
  LitElement,
  Component,
} from '@rxdi/lit-html';

/**
 * @customElement navbar-component
 */
@Component({
  selector: 'navbar-component',
  style: css`
    .spacer {
      flex: 1 3 auto;
    }
    .container {
      display: flex;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #f3f3f3;
      cursor: pointer;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      color: #666;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover:not(.active) {
      background-color: #ddd;
    }

    li a.active {
      color: white;
      background-color: #4caf50;
    }
  `,
  template(this: NavbarComponent) {
    return html`
      <ul class="container">
        <li><a @click=${() => this.router.go('/')}>Home</a></li>
        <li><a @click=${() => this.router.go('/about')}>About</a></li>
        <span class="spacer"></span>
        <li><a @click=${this.onIncrement}>Increment</a></li>
        <li><a @click=${this.onDecrement}>Decrement</a></li>
        <li><a>${this.counter}</a></li>
      </ul>
    `;
  },
})
export class NavbarComponent extends LitElement {
  @property() counter = 0;

  @Router() router: Router;

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

src/app/app.component.ts

```typescript
import { html, Component, async, LitElement } from '@rxdi/lit-html';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @customElement about-component
 */
@Component({
  selector: 'about-component',
  template(this: AboutComponent) {
    return html`
      <header>
        <h1>About</h1>
      </header>
      ${async(this.timer)}
      <p>
        <img
          src="https://www.w3schools.com/html/pic_trulli.jpg"
          alt="Italian Trulli"
        />
      </p>
    `;
  },
})
export class AboutComponent extends LitElement {
  private timer = timer(1, 1000).pipe(map((v) => v));
}
```

#### Home Component

src/app/home/home.component.ts

```typescript
import { SpaceXService } from '@core/spacex/spacex.service';
import { ILaunch } from '@introspection/index';
import { AngularLayout, FlexLayout } from '@rhtml/modifiers';
import { Inject } from '@rxdi/core';
import {
  async,
  Component,
  css,
  html,
  LitElement,
  OnDestroy,
  OnInit,
  OnUpdate,
} from '@rxdi/lit-html';
import { defer, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @customElement home-component
 */
@Component<HomeComponent>({
  selector: 'home-component',
  style: css`
    .launch {
      color: white;
      background: #467792;
      height: 100px;
    }
  `,
  modifiers: [...FlexLayout, ...AngularLayout],
  template(this) {
    return html`
      <h4>Time is ${async(this.timer)}</h4>
      <header>
        <h1>Space X mission names:</h1>
      </header>
      <div
        fxLayout="row wrap"
        fxLayoutAlign="space-evenly stretch"
        fxLayoutGap="10px"
      >
        <r-for .of=${this.launches}>
          <r-let
            .item=${(launch: ILaunch) => html`
              <div
                class="launch"
                fxLayout="column"
                fxLayoutAlign="center center"
              >
                <div>${launch.mission_name}</div>
                <a
                  ngIf=${!!launch.links.article_link}
                  target="_blank"
                  .href=${launch.links.article_link}
                  >Article</a
                >
                <a
                  ngIf=${!!launch.links.video_link}
                  target="_blank"
                  .href=${launch.links.video_link}
                  >Video</a
                >
              </div>
            `}
          ></r-let>
        </r-for>
      </div>
    `;
  },
})
export class HomeComponent
  extends LitElement
  implements OnInit, OnDestroy, OnUpdate
{
  private timer = timer(100, 1000).pipe(
    map(() => {
      const date = new Date();
      return [
        [date.getHours(), 'hours'].join(' '),
        [date.getSeconds(), ' seconds'].join(' '),
      ].join(' - ');
    })
  );

  @Inject(SpaceXService)
  private spacexService: SpaceXService;

  private launches: Observable<ILaunch[]> = defer(() =>
    this.spacexService.getLaunches()
  );

  OnInit() {
    console.log('Home component init');
  }

  OnDestroy() {
    console.log('Home component destroyed');
  }

  OnUpdate() {
    console.log('Home component updated');
  }
}
```

#### Launches past SpaceX graphql Query

Get all past launches for every mission

```graphql
query launchesPast($limit: Int) {
  launchesPast(limit: $limit) {
    ...LaunchFragment
  }
}
```

And graphql `fragment`

```graphql
fragment LaunchFragment on Launch {
  mission_name
  launch_date_local
  launch_site {
    site_name_long
  }
  links {
    article_link
    video_link
  }
  rocket {
    rocket_name
    second_stage {
      payloads {
        payload_type
        payload_mass_kg
        payload_mass_lbs
      }
    }
  }
  ships {
    name
    home_port
    image
  }
}
```

#### Footer component

```typescript
import { html, css, Component, LitElement } from '@rxdi/lit-html';

/**
 * @customElement footer-component
 */
@Component({
  selector: 'footer-component',
  useShadow: true,
  style: css`
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #03a9f4;
      color: white;
      text-align: center;
    }
  `,
  template() {
    return html`
      <div class="footer">
        <p>Footer</p>
      </div>
    `;
  },
})
export class FooterComponent extends LitElement {}
```

#### Not fund component

```typescript
import { html, Component, LitElement } from '@rxdi/lit-html';

/**
 * @customElement not-found-component
 */
@Component({
  selector: 'not-found-component',
  useShadow: true,
  template: () => html`
    <h1>Not found component!</h1>
    <p>Please check your URL.</p>
  `,
})
export class NotFoundComponent extends LitElement {}
```

#### Unit Testing

```typescript
import 'jest';
import { Container, createTestBed } from '@rxdi/core';
import { State } from './app.state';

describe('State Injectable', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      providers: [State],
    }).toPromise();
  });

  it('should be defined', (done) => {
    expect(Container.has(State)).toBeTruthy();
    done();
  });
});
```

#### Component testing

Currently this is not a good and working solution!
I found out `@testing-library/dom` and needs to be researched!
No testing at the moment or if you have proposal solution [pull](https://github.com/rxdi/starter-client-side-lit-html/pulls) requests are welcomed

```typescript
import { Container, createTestBed } from '@rxdi/core';
import { HomeComponent } from './home.component';

describe('Home component tests', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      components: [HomeComponent],
    }).toPromise();
  });

  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be defined', (done) => {
    expect(Container.has(HomeComponent)).toBeTruthy();
    done();
  });

  it('displays greeting', () => {
    const element = Container.get(HomeComponent);
    element['render']();
    document.body.appendChild(element);
    const div = document.querySelector('home-component');
    expect(div.textContent).toBe('');
  });
});
```

#### Debug testing with VSCODE

Go to Debug tab and hit `Jest Test`

#### Firebase deploy

Install `firebase-tools`

```bash
npm install -g firebase-tools
```

Execute firebase init command and follow the steps

```bash
firebase init
```

> Note `dist` is the output folder of command `npm run build` aka `parcel build` when choosing your `deploy` folder you should consider put `dist`

This example is configurated to deploy with firebase so you need just to assign your `projectId`:

```bash
firebase use --add
```

`firebase.json`

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

`.firebaserc`

```json
{
  "projects": {
    "staging": "rxdi-pwa"
  }
}
```

#### Good practices

> Keep templates really simple and use renderer to show them instead of writing logic inside

Wrong

```typescript
import { async } from '@rxdi/lit-html';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

const getCollection = async () => ({ collection: { name: '@rxdi/core' } });

html`
  <div>
    ${async(
      of(getCollection('@rxdi/core')).pipe(
        map((o) => o.collection),
        map((c) => c.name)
      )
    )}
  </div>
`;
```

> In this example the logic is testable

Correct

```typescript
import { async } from '@rxdi/lit-html';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

const getCollection = async () => ({ collection: { name: '@rxdi/core' } });
const something = () =>
  of(getCollection()).pipe(
    map((o) => o.collection),
    map((c) => c.name)
  );

html` <div>${async(something)}</div> `;
```

#### Wiring up multiple Injectables with single InjectionToken

```typescript
import { Container, Injectable, InjectionToken } from '@rxdi/core';

export interface CoffeeFactoryToken {
  make(action: CoffeeType): void;
}

export type CoffeeType = 'cappuccino' | 'espresso';

export const CoffeeFactoryToken = new InjectionToken<CoffeeFactoryToken>(
  'factories'
);

@Injectable({
  id: CoffeeFactoryToken,
  init: true,
  multiple: true,
})
export class CoffeeFactory1 implements CoffeeFactoryToken {
  make(type: CoffeeType) {
    console.log('Coffee factory 1', type);
  }
}

@Injectable({
  id: CoffeeFactoryToken,
  init: true,
  multiple: true,
})
export class CoffeeFactory2 implements CoffeeFactoryToken {
  make(type: CoffeeType) {
    console.log('Coffee factory 2', type);
  }
}

@Injectable({
  id: CoffeeFactoryToken,
  init: true,
  multiple: true,
})
export class CoffeeFactory3 implements CoffeeFactoryToken {
  make(type: CoffeeType) {
    console.log('Coffee factory 3', type);
  }
}

const factories = Container.getMany(CoffeeFactoryToken);
factories.forEach((factory) => factory.make('cappuccino'));
```

#### Injecting multiproviders inside Components

```typescript
import { InjectMany, Component } from '@rxdi/core';
import { html, render, Component } from '@rxdi/lit-html';
import { CoffeeFactoryToken } from './coffee-factory';

/**
 * @customElement my-web-component
 */
@Component({
  selector: 'my-web-component',
})
export class MyWebComponent extends LitElement {
  @InjectMany(CoffeeFactoryToken)
  private factories: CoffeeFactoryToken;

  OnInit() {
    for (const factory of this.factories) {
      factory.make('cappuccino');
    }
  }
}
```

#### Code splitting

Lets create our lazy loaded module with routes

```typescript
import { Module } from '@rxdi/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@rxdi/router';

@Module({
  imports: [
    RouterModule.forChild([
      {
        path: '/',
        component: 'x-user-home',
      },
      {
        path: '/:user',
        component: 'x-user-profile',
      },
    ]),
  ],
  bootstrap: [AboutComponent],
})
export class AboutModule {}
```

#### Importing module

Lets import this module inside AppModule

```typescript
RouterModule.forRoot<Components>([
  {
    path: '/',
    component: 'home-component',
  },
  {
    path: '/about',
    component: 'about-component',
    children: () => import('./about/about.module'),
  },
]);
```

Part with `children:` is really important since this will lazy load our module and load routes.

From where this `about-component` come from ? and how we actually load it ? Here is the magic

Every `@rxdi/core` module has property `bootstrap`(check above `AboutModule`), putting Component inside, will add him automatically to `Dependency injection` and thus it will be registered inside `customComponents` collection from where Router will load it and redirect to.

If you don't define `component` property the rendered view will be empty and then you can control the view from the child module config by defining empty slash path `/`

```typescript
RouterModule.forChild([
  {
    path: '/',
    component: 'x-user-home',
  },
]);
```

If you define `component` property and the element present this will be the main element wrapper for all other views so it will present inside every child view.

You can define also components directly passing class instance since automaticaly decorator is creating static method `is()` returning `tag` name

```typescript
RouterModule.forChild([
  {
    path: '/',
    component: XUserHomeComponent,
  },
]);
```

#### Router Guards

Defining Guard

```typescript
import { Injectable, OnInit } from '@rxdi/core';
import { Observable } from 'rxjs';
import {
  CanActivateContext,
  CanActivateCommands,
  CanActivateResolver,
  CanActivateRedirectResult,
} from '@rxdi/router';

@Injectable()
export class LoggedInGuard implements CanActivateResolver, OnInit {
  OnInit() {}

  canActivate(
    context: CanActivateContext,
    commands: CanActivateCommands
  ):
    | CanActivateRedirectResult
    | boolean
    | Promise<boolean>
    | Observable<boolean>
    | void {
    // return commands.redirect('/')
    // return false | true;
    // return new Promise((r) => r(true | false));
    // return new Observable((o) => {
    //     o.next(false | true);
    //     o.complete();
    // });
    // throw new Error('error');
    // If everything is cool we can leave VOID
  }
}
```

#### Using guard

Guards can be defined inside `RouterModule`
When particular route resolver is triggered you will stop in this `Guard` before component is resolved

```typescript
RouterModule.forRoot<Components>([
  {
    path: '/',
    component: 'home-component',
  },
  {
    path: '/about',
    component: 'about-component',
    children: () => import('./about/about.module'),
    canActivate: LoggedInGuard,
  },
]);
```

Njoy!
