import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { State } from './app.state';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@Module({
  components: [NavbarComponent, HomeComponent, FooterComponent],
  imports: [
    GraphqlModule.forRoot(
      {
        uri: 'https://questups.com/api/graphql'
      },
      DOCUMENTS
    ),
    RouterModule.forRoot<string>(
      [
        {
          path: '/',
          component: HomeComponent
        },
        {
          path: '/about',
          children: () => import('./about/about.module')
        },
        {
          path: '/ui-components',
          children: () => import('./ui-components/ui-components.module')
        },
        {
          path: '/documentation',
          children: () => import('./documentation/documentation.module')
        },
        {
          path: '/release-notes',
          children: () => import('./release-notes/release-notes.module')
        },
        {
          path: '(.*)',
          component: 'not-found-component',
          action: () => import('./not-found/not-found.component')
        }
        //   { path: '/users/:user', component: 'x-user-profile' },
      ],
      { log: true }
    ),
    SharedModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [State]
})
export class AppModule {}
