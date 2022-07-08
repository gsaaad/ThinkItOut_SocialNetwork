const { User } = require("../models");

const userController = {
  // get all Users

  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        selecT: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //   Get user by Id
  getPizzaById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .then((dbUserData) => {
        // if no user found, send 404
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "There's no User with this ID!, Try again..." });
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //   POST create user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //   PUT user by ID
  updateUser({ params, body }, res) {
    // the third parameter, new, returns a new version of the document.
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "There's no user with this ID! Try again" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(
          err,
          "There's an error in updating the user by ID, Try again!"
        );
      });
  },
  deletePizza({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "There's no User found with this ID!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err, "There's an error in Deleting User, Try again!");
        res.status(400).json(err);
      });
  },
};

module.exports = userController;
