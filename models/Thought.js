const { Schema, model, Types } = require("mongoose");

const reactionsSchema = new Schema({
  // default ID
  reacitonId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  reactionBody: {
    type: String,
    require: true,
    maxLength: 280,
  },
  writtenBy: {
    type: String,
    require: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// validate email through regex
var validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const ThoughtSchema = new Schema(
  {
    // thoughtText with minlength of 1, max 280, validated and match email through regex
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
      validate: [validateEmail, "Please enter a valid email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      require: true,
    },
    reactions: [reactionsSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtuals("reactionCount").get(function () {
  return this.reactions.length;
});
const thought = model("Thought", ThoughtSchema);

module.exports = thought;
