import { Author, Book } from '../../../models';

export default {
  Query: {
    Author: (_, { id }) => Author.getById(id),
    allAuthors: () => Author.getAll()
  },

  Mutation: {
    updateAuthor: (_, { input: { id, ...update } }) =>
      Author.updateOne(id, update)
  },

  Author: {
    books: ({ id: authorId }) =>
      Book.getAll().filter(book => book.author === authorId)
  }
};
