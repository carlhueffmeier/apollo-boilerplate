import config from '../config';
import createServer from './graphql/createServer';

// Run the server 🔥
const server = createServer();
server.listen({ port: config.PORT || 4000 }).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🎡   GraphQL Playground ready at ${url}`);
});
