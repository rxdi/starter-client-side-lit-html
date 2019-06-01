import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { Components } from './shared/components';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestService } from './test/test.service';

@Module({
  components: [
      LoginComponent,
      NavbarComponent
  ],
  imports: [
    GraphqlModule.forRoot(
      {
        uri: 'https://questups.com/api/graphql'
      },
      DOCUMENTS
    ),
    RouterModule.forRoot<Components>('outlet', [
      {
        path: '/',
        component: 'app-component',
        action: () => import('./app.component')
      },
      {
        path: '/gosho',
        component: 'app-component',
        action: () => import('./app.component')
      },
      {
        path: '/app',
        component: 'app-component',
        action: () => import('./app.component')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      },
      //   { path: '/users/:user', component: 'x-user-profile' },
    ]),
  ],
  providers: [TestService],
})
export class AppModule {}
