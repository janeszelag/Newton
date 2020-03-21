const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    return db.getAllTopics().then(topics => {
      res.status(200).json(topics);
    });
  });

  router.post("/", (req, res) => {
    const topics = req.body.topics;
    const userId = req.body.userId;
    topics.forEach((topic)=> {
      let topic_id = parseInt(topic)
      return db.addTopicsToUser(userId, topic_id)
      .then(topics => {
        res.status(200).json(topics);
      })
      .catch(err => {
        console.log(err);
      });
    }) 
      
  });

  return router;
};
