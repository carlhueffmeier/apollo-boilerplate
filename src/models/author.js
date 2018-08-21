import db from '../db';

export default {
  getAll: () => Object.values(db.authors),
  getById: id => db.authors[id],
  updateOne: (id, update) => Object.assign(db.authors[id], update)
};
