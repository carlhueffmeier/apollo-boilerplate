import db from '../db';

export default {
  getAll: () => Object.values(db.books),
  getById: id => db.books[id],
  updateOne: (id, update) => Object.assign(db.books[id], update)
};
