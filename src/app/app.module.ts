import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Components } from './shared/components';
import { State } from './app.state';

@Module({
  components: [
    HomeComponent,
  ],
  imports: [
    GraphqlModule.forRoot(
      {
        uri: 'https://questups.com/api/graphql'
      },
      DOCUMENTS
    ),
    RouterModule.forRoot<Components>([
      {
        path: '/',
        component: 'home-component'
      },
      {
        path: '/about',
        component: 'about-component',
        action: () => import('./about/about.component')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      }
      //   { path: '/users/:user', component: 'x-user-profile' },
    ])
  ],
  bootstrap: [AppComponent],
  providers: [State],
})
export class AppModule {}
