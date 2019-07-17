import { Injector } from '@rxdi/core';
import { DocumentTypes } from '../@introspection/documentTypes';
import { from, Observable } from 'rxjs';
import { IQuery, IMutation, ISubscription } from '../@introspection';
import { LitElement } from '@rxdi/lit-html';
import { DataProxy } from 'apollo-cache';
import {
  ApolloClient,
  importQuery,
  QueryOptions,
  SubscriptionOptions,
  MutationOptions
} from '@rxdi/graphql-client';

export class BaseComponent extends LitElement {
  @Injector(ApolloClient) public graphql: ApolloClient;
  // createRenderRoot() {
  //   return this;
  // }
  query<T = IQuery>(options: ImportQueryMixin) {
    options.query = importQuery(options.query);
    return from(this.graphql.query.bind(this.graphql)(
      options
    ) as any) as Observable<{ data: T }>;
  }

  mutate<T = IMutation>(options: ImportMutationMixin) {
    options.mutation = importQuery(options.mutation);
    return from(this.graphql.mutate.bind(this.graphql)(
      options
    ) as any) as Observable<{ data: T }>;
  }

  subscribe<T = ISubscription>(options: ImportSubscriptionMixin) {
    options.query = importQuery(options.query);
    return from(this.graphql.subscribe.bind(this.graphql)(
      options
    ) as any) as Observable<{ data: T }>;
  }
}

interface ImportQueryMixin extends QueryOptions {
  query: DocumentTypes;
}

interface ImportSubscriptionMixin extends SubscriptionOptions {
  query: DocumentTypes;
}

interface ImportMutationMixin extends MutationOptions {
  mutation: DocumentTypes;
  update?(proxy: DataProxy, res: { data: IMutation }): void;
}
