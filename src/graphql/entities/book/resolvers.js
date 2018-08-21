import { Author, Book } from '../../../models';

export default {
  Query: {
    Book: (_, { id }) => Book.getById(id),
    allBooks: () => Book.getAll()
  },

  Mutation: {
    updateBook: (_, { input: { id, ...update } }) =>
      Book.updateOne(id, update)
  },

  Book: {
    author: ({ author }) => Author.getById(author)
  }
};
