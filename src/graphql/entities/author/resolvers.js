// Every resolver is passed 4 arguments
// 1. Root object
// 2. Arguments passed (if any)
// 3. Context
//    In our case, the models we passed during server initialization
// 4. Info for advanced usage and optimization
//    The documentation helpfully suggests to read the source code:
//    https://github.com/graphql/graphql-js/blob/c82ff68f52722c20f10da69c9e50a030a1f218ae/src/type/definition.js#L489-L500

export default {
  Query: {
    Author: (_, { id }, { Author }) => Author.getById(id),
    allAuthors: (_, __, { Author }) => Author.getAll()
  },

  Mutation: {
    updateAuthor: (_, { input: { id, ...update } }, { Author }) =>
      Author.updateOne(id, update)
  },

  // In the case of resolvers for custom types, the `root object`
  // mentioned above will be the `author`.
  // So, if we query the `books` of an author, we can conveniently
  // access all the authors properties.
  Author: {
    books: ({ id: authorId }, _, { Book }) =>
      Book.getAll().filter(book => book.author === authorId)
  }
};
