import { GraphqlComponent } from './graphql.component';

export class BaseComponent extends GraphqlComponent {
  createRenderRoot() {
    return this;
  }
}
