import { ApolloServer } from 'apollo-server';
import graphQlSchema from './schema';
import config from '../../config';

export default function createServer() {
  return new ApolloServer({
    ...graphQlSchema,
    playground: {
      settings: config.PLAYGROUND_SETTINGS
    }
  });
}
