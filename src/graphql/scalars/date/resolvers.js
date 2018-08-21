import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    // Value from the client
    parseValue(value) {
      return new Date(value).toISOString();
    },
    // Value sent to the client
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new Date(ast.value).toISOString();
      }
      return null;
    }
  })
};
