import { Injector } from '@rxdi/core';
import { LitElement } from 'lit-element';
import { GraphqlClient } from '@rxdi/graphql-client';
import {
  QueryOptions,
  MutationOptions,
  SubscriptionOptions
} from 'apollo-boost';
import { importQuery } from '@rxdi/graphql-client/dist/graphql-helpers';
import { DocumentTypes } from '../@introspection/documentTypes';
import { from, Observable } from 'rxjs';
import { IQuery, IMutation, ISubscription } from '../@introspection';

interface ImportQueryMixin extends QueryOptions {
  query: DocumentTypes;
}

interface ImportSubscriptionMixin extends SubscriptionOptions {
  query: DocumentTypes;
}

interface ImportMutationMixin extends MutationOptions {
  mutation: DocumentTypes;
}

export class GraphqlComponent extends LitElement {

  @Injector(GraphqlClient) public graphql: GraphqlClient;

  query<T = IQuery>(options: ImportQueryMixin) {
    options.query = importQuery(options.query);
    return from((this.graphql.query.bind(this.graphql)(options) as any)) as Observable<{ data: T }>;
  }

  mutate<T = IMutation>(options: ImportMutationMixin) {
    options.mutation = importQuery(options.mutation);
    return from((this.graphql.mutate.bind(this.graphql)(options) as any)) as Observable<{ data: T }>;
  }

  subscribe<T = ISubscription>(options: ImportSubscriptionMixin) {
    options.query = importQuery(options.query);
    return from((this.graphql.subscribe.bind(this.graphql)(options) as any)) as Observable<{ data: T }>;
  }
}
