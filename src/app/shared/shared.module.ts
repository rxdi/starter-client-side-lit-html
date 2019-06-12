import { Module } from '@rxdi/core';
import { TailWindComponent } from './tailwind/tailwind.component';
import { DefaultSpinnerComponent } from './spinners/default-spinner.component';
import { OriginalStyle } from './original/original-style.component';
import { HamburgerComponent } from '@rxdi/ui-components/hamburger/client/hamburger.component';

@Module({
  components: [
    TailWindComponent,
    DefaultSpinnerComponent,
    OriginalStyle,
    HamburgerComponent
  ]
})
export class SharedModule {}
