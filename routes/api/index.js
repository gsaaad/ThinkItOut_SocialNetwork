const router = require("express").Router();
// const ThoughtRoutes = require("./thought-routes");
const UserRoutes = require("./user-routes");

router.use("/users", UserRoutes);
// router.use("/thoughts", ThoughtRoutes);

module.exports = router;
