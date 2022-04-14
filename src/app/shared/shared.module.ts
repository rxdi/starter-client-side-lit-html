import { ForOperator, IfOperator, LetOperator } from '@rhtml/operators';
import { Module } from '@rxdi/core';
import { ReactiveUiModule } from '@rxdi/ui-kit';
import { ButtonComponent } from '@rxdi/ui-kit/button';
import { DividerComponent } from '@rxdi/ui-kit/divider';

@Module({
  imports: [ReactiveUiModule.forRoot()],
  components: [
    ButtonComponent,
    DividerComponent,
    ForOperator,
    IfOperator,
    LetOperator,
  ],
})
export class SharedModule {}
