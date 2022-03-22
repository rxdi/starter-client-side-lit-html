import { Module } from '@rxdi/core';
import {
  convertToPossibleTypes,
  GraphqlModule,
  GraphQLRequest,
  InMemoryCache
} from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { ReactiveUiModule } from '@rxdi/ui-kit';
import { ButtonComponent } from '@rxdi/ui-kit/button';
import { DividerComponent } from '@rxdi/ui-kit/divider';

import { introspectionQueryResultData } from '~/@introspection/fragmentTypes';

import { DOCUMENTS } from './@introspection/documents';
import { AppComponent } from './app.component';
import { State } from './app.state';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@Module({
  components: [NavbarComponent, HomeComponent, FooterComponent, ButtonComponent, DividerComponent],
  imports: [
    ReactiveUiModule.forRoot(),
    GraphqlModule.forRoot(
      {
        async onRequest(this: GraphQLRequest) {
          return new Headers();
        },
        cache: new InMemoryCache({
          possibleTypes: convertToPossibleTypes(introspectionQueryResultData),
        }),
        uri: 'https://api.spacex.land/graphql/',
        pubsub: 'wss://my-graphql-server-subscriptions/subscriptions',
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
export class AppModule { }
