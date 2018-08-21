export default {
  Query: {
    Book: (_, { id }, { Book }) => Book.getById(id),
    allBooks: (_, __, { Book }) => Book.getAll()
  },

  Mutation: {
    updateBook: (_, { input: { id, ...update } }, { Book }) =>
      Book.updateOne(id, update)
  },

  Book: {
    author: ({ author: authorId }, _, { Author }) =>
      Author.getById(authorId)
  }
};
