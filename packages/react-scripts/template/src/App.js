import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import BaseLayout from './layout/BaseLayout';

// const SERVER_URL = 'http://localhost:4000/graphql'

const SERVER_URL = 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn'; // Server URL (must be absolute)

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: SERVER_URL,
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  connectToDevTools: process.browser,
  link,
  cache: new InMemoryCache().restore({}),
});

export default () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <BaseLayout />
      </Router>
    </ApolloProvider>
  );
};
