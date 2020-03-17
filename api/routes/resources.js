const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    return db.getResources()
    .then((resources) => {
      res.status(200).json(resources)
    })
  });
  return router;
};
