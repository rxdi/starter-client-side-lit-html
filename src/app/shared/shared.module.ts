import { ForOperator, IfOperator, LetOperator } from '@rhtml/operators';
import { Module } from '@rxdi/core';
import { ReactiveUiModule } from '@rxdi/ui-kit';
import { ButtonComponent } from '@rxdi/ui-kit/button';
import { CardComponent } from '@rxdi/ui-kit/card';
import { DividerComponent } from '@rxdi/ui-kit/divider';

@Module({
  imports: [ReactiveUiModule.forRoot()],
  components: [
    ButtonComponent,
    DividerComponent,
    ForOperator,
    IfOperator,
    LetOperator,
    CardComponent,
  ],
})
export class SharedModule { }
