import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { RouterModule } from '@rxdi/router';
import { DOCUMENTS } from './@introspection/documents';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Components } from './shared/components';
import { State } from './app.state';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared.module';

@Module({
  components: [
    NavbarComponent,
    HomeComponent,
    FooterComponent
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
        component: HomeComponent
      },
      {
        path: '/about',
        children: () => import('./about/about.module')
      },
      {
        path: '(.*)',
        component: 'not-found-component',
        action: () => import('./not-found/not-found.component')
      }
      //   { path: '/users/:user', component: 'x-user-profile' },
    ], { log: true }),
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers: [State],
})
export class AppModule {}
