
const db = require('./data/db-config');

module.exports = {
  insert,
//   update,
  remove,
  getAll,
  findById,
};


function insert(cat) {
  return db('cats').insert(cat)
  .then(ids => {
      return findById(ids[0])
  });
}

// async function update(id, changes) {
//   return null;
// }

function remove(id) {
  return db('cats')
  .where({id})
  .del();
}

function getAll() {
  return db('cats');
}

function findById(id) {
  return db('cats')
  .where({id})
  .first();
}
