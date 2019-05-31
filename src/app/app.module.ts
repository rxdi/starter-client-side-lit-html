import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { AppComponent } from './app.component';
import { Components } from './shared/components';
import { LoginComponent } from './login/login.component';
// const sample = new CheckBox('CheckBox', true);

@Module({
  components: [
      LoginComponent
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
        component: 'app-component'
        // action: () => import('./app.component')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      },
      //   { path: '/users/:user', component: 'x-user-profile' },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
