import merge from 'lodash.merge';

// Root types
import rootTypeDefs from './typeDefs.gql';
import rootResolvers from './resolvers';

// Scalar types
import {
  typeDefs as DateType,
  resolvers as dateResolvers
} from '../scalars/date';

// Entity types
import {
  typeDefs as Author,
  resolvers as authorResolvers
} from '../entities/author';
import {
  typeDefs as Book,
  resolvers as bookResolvers
} from '../entities/book';

export default {
  // Apollo Server accepts an array of type definitions 👍
  typeDefs: [rootTypeDefs, DateType, Author, Book],
  // Since the resolvers are just objects, we can make due with a deep merge
  resolvers: merge(
    rootResolvers,
    dateResolvers,
    authorResolvers,
    bookResolvers
  )
};
