const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    const userId = parseInt(req.query.userId);
    return db.getResourcesByTopicsForUser(userId).then(resources => {
      res.status(200).json(resources);
    });
  });

  router.get("/page", (req, res) => {
    const id = parseInt(req.query.id);
    return db.getResourceByID(id).then(resource => {
      res.status(200).json(resource);
    });
  });

  // router.get("/", (req, res) => {
  //   const userId = req.body.userId;
  //   console.log(userId)
  //   return db.getResources()
  //   .then((resources) => {
  //     res.status(200).json(resources)
  //   })
  // });
  return router;
};
