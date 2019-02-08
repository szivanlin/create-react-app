import React from 'react';
import BaseLayout from './BaseLayout';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

const client = new ApolloClient({
  connectToDevTools: process.browser,
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  }),
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
