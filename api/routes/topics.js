const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    return db.getAllTopics()
    .then((topics) => {
      res.status(200).json(topics)
    })
    
  });

  return router;
};
