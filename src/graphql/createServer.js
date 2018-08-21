import { ApolloServer } from 'apollo-server';
import graphQlSchema from './schema';
import config from '../../config';

export default function createServer({ context } = {}) {
  return new ApolloServer({
    // typeDefs and resolvers
    ...graphQlSchema,
    // Context will be available to all resolvers
    context,
    // Style settings for the GraphQL Playground
    playground: {
      settings: config.PLAYGROUND_SETTINGS
    }
  });
}
