import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    SharedModule,
    GraphqlModule.forRoot(
      {
        uri: 'https://questups.com/api/graphql'
      },
      DOCUMENTS
    ),
    RouterModule.forRoot('outlet', [
      {
        path: '/',
        component: 'app-component',
        action: () => import('./app.component')
      },
      {
        path: '/consultants',
        component: 'consultants-component',
        action: () => import('./consultants/consultants.component')
      },
      {
        path: '/login',
        component: 'login-component',
        action: () => import('./login/login.component')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./shared/components/not-found/not-found.component')
      },
      //   { path: '/users/:user', component: 'x-user-profile' },
    ]),
  ],
})
export class AppModule {}
