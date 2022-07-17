const { User } = require("../models");

const userController = {
  // get all users

  getAllUsers(req, res) {
    User.find({})
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  getUserById({ params }, res) {
    User.findOne({ _id: params.id }).then((dbUserData) => {
      // if user id not found
      if (!dbUserData) {
        res
          .status(404)
          .json({ message: "No User found with this ID! Try again.." });
      }
      res.json(dbUserData);
    });
  },
};
