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

const getResources = () => {
  return db.query(
    `SELECT * FROM resources ORDER BY id ASC`)
    .then(function (res) {
      
      return res.rows;
    })
}

exports.getResources = getResources;


const getUserWithEmail = function (email) {
  return db.query(
    `SELECT id, email, firstname, lastname, password
  FROM users
  WHERE email = $1`, [email])
    .then(function (res) {
      if (res) {
        user = res.rows[0];
      } else {
        user = null;
      }
      return user;
    })
}

exports.getUserWithEmail = getUserWithEmail;



const addUser = function (firstName, lastName, email, password) {
  return db.query(
    ` INSERT INTO users (firstName, lastName, email, password)
     VALUES ($1, $2, $3, $4)
     RETURNING *`, [firstName, lastName, email, password])
    .then(function (res) {
      return res.rows[0];
    })
}

exports.addUser = addUser;

const getAllTopics = function () {
  return db.query(
    `SELECT id, name
    FROM topics`)
    .then(res => {
      return res.rows;
    })
}

exports.getAllTopics = getAllTopics;


//connecting topics to user upon signin
const addTopicsToUser = function (user_id, topic_id) {
  return db.query(
    ` INSERT INTO user_topics (user_id, topic_id)
     VALUES ($1, $2)
     RETURNING *`, [user_id, topic_id])
    .then(function (res) {
      console.log(res.rows);
    })
}

exports.addTopicsToUser = addTopicsToUser