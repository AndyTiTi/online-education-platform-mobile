/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { faker } from '@faker-js/faker/locale/zh_CN';

const typeDefs = `#graphql
  type UserType {
    id: String!
    name: String!
    desc: String!
    tel: String!
    avatar: String
  }

  type Query {
    find(id: String!): UserType!
  }

  type Mutation {
    create(params: UserInput!): Boolean!
    update(id: String!, params: UserInput!): Boolean!
    delete(id: String!): Boolean!
  }

  input UserInput {
    name: String!
    desc: String!
    avatar: String
  }
`;

const resolvers = {
  UserType: {
    name: () => faker.person.lastName() + faker.person.fullName(),
  },
};

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Hello',
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
    preserveResolvers: true,
  }),
});

startStandaloneServer(server, { listen: { port: 8888 } });
