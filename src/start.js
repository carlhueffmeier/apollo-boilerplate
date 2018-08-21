import { ApolloServer } from 'apollo-server';
import graphQlSchema from './graphql/schema';
import dotenv from 'dotenv';

// Load configuration
dotenv.config({ path: './variables.env' });

// Run the server 🔥
const server = new ApolloServer(graphQlSchema);
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🎡   GraphQL Playground ready at ${url}`);
});
