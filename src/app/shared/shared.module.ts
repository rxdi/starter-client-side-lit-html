import { Module } from '@rxdi/core';
import { TailWindComponent } from './tailwind/tailwind.component';
import { DefaultSpinnerComponent } from './spinners/default-spinner.component';
import { OriginalStyle } from './original/original-style.component';
import { HamburgerClientModule } from '@rxdi/ui-components/hamburger/client/index';

@Module({
  imports: [HamburgerClientModule],
  components: [
    TailWindComponent,
    DefaultSpinnerComponent,
    OriginalStyle,
  ]
})
export class SharedModule {}
