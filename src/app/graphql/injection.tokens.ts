import { InjectionToken } from '@rxdi/core';
import { ApolloClient } from 'apollo-boost';

export const GraphqlClient = new InjectionToken<ApolloClient<any>>(
  'apollo-graphql-client'
);
export type GraphqlClient = ApolloClient<any>;
