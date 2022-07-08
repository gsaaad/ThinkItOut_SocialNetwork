const { User, Thought } = require("../models");

const thoughtController = {
  // get thoughts to

  // to add thought, we need params and body, response

  addThought({ params, body }, res) {
    console.log(body);
    Thought.create({ body })
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          {
            _id: params.pizzaId,
          },
          {
            $push: { comments: _id },
          },
          {
            new: true,
          }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No User with this Id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log("There was an error in adding a thought, Try Again!");
      });
  },
};
