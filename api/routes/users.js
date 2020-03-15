
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    return db.getUsers()
    .then((users) => {
      res.status(200).json(users)
    })
  });
  return router;
};
