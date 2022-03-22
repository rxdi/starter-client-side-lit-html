import { Module } from '@rxdi/core';
import { RouterModule } from '@rxdi/router';
import { ReactiveUiModule } from '@rxdi/ui-kit';
import { ButtonComponent } from '@rxdi/ui-kit/button';
import { DividerComponent } from '@rxdi/ui-kit/divider';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@Module({
  components: [
    HomeComponent,
    ButtonComponent,
    DividerComponent
  ],
  imports: [
    ReactiveUiModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '/',
          component: HomeComponent,
        },
        {
          path: '(.*)',
          component: 'not-found-component',
          action: () => import('./not-found/not-found.component'),
        },
      ],
      { log: true }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
