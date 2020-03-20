const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    return db.getUsers().then(users => {
      res.status(200).json(users);
    });
  });

  //sign up user
  router.post("/", (req, res) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    
    //checks if email is in use already
    return db.getUserWithEmail(email)
    .then(user => {
      if (!user) {
        return db.addUser(firstName, lastName, email, password)
        .then(user => {
          console.log(user)
          res.status(200).json(user)
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        //email in use, sends error -> later change to error on template ejs
        res.status(404).send('Error: Email already in use');
      }
    })
    .catch(err => {
      console.log(err);
    });
  });

  return router;
};
