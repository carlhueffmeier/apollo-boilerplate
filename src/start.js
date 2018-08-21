import config from '../config';
import createServer from './graphql/createServer';
import * as models from './models';

// Here, we are passing in our models as `context`.
// Why is this helpful?
// Using the models as context makes them automatically available
// to all resolvers. (passed to them as the 3rd argument)
// This way we have a neat separation between the `graphql`
// and the `models` code.
const server = createServer({ context: models });

// Now, run the server 🔥
server.listen({ port: config.PORT || 4000 }).then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🎡   GraphQL Playground ready at ${url}`);
});
