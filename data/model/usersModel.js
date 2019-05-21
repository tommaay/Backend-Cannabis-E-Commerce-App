const db = require('../dbConfig');

module.exports = {
    getAll,
    getById,
};

function getAll() {
    return db('users');
}

function getById(id) {
    return db('users')
        .where({ id: id })
        .first();
}
