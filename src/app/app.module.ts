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
    RouterModule.forRoot<
      | 'app-component'
      | 'not-found-component'
      | 'navbar-component'
      | 'home-component'
      | 'about-component'
    >(
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
