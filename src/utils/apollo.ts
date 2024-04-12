import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  // headers: {
  //   authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  // },
});
