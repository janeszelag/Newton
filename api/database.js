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

//menupage - grabs resources by topics associated with that userId

const getResourcesByTopicsForUser = function (id) {
  return db.query(`SELECT resources.*
  FROM resources
  JOIN topics_resources ON topics_resources.resource_id = resources.id
  JOIN topics ON topics_resources.topic_id = topics.id
  JOIN user_topics ON topics_resources.topic_id = user_topics.topic_id
  WHERE user_topics.user_id = $1 
  GROUP BY resources.id;
    `, [id])
    .then(data => {
      
      return data.rows;
    });
}

exports.getResourcesByTopicsForUser = getResourcesByTopicsForUser

//old function uses to grab all resources
const getResources = () => {
  return db.query(
    `SELECT * FROM resources ORDER BY id ASC`)
    .then(function (res) {
      
      return res.rows;
    })
}

exports.getResources = getResources;


//used for login/sign up
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


//used for sign up, user chooses topics
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
  console.log('here')
  return db.query(
    ` INSERT INTO user_topics (user_id, topic_id)
     VALUES ($1, $2)
     RETURNING *`, [user_id, topic_id])
    .then(function (res) {
      console.log(res.rows);
    })
}

exports.addTopicsToUser = addTopicsToUser