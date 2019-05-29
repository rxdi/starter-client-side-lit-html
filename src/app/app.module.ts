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
