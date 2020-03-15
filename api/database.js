const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();



const getUsers = () => {
  return db.query(
    `SELECT * FROM users ORDER BY id ASC`)
    .then(function (res) {
      
      return res.rows;
    })
}

exports.getUsers = getUsers;