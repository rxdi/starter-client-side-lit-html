import { Module } from '@rxdi/core';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@Module({
  components: [ButtonComponent, NavbarComponent, NotFoundComponent]
})
export class SharedModule {}
