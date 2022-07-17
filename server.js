// import express and mongoose DB

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3002;

const MONGOD_URL =
  "mongodb+srv://gsaad:<georgess2>@cluster0.rmwv8.mongodb.net/?retryWrites=true&w=majority";

app.use(require("./routes"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
mongoose.connect("mongodb://localhost:27017/think-it-out", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("debug", true);

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});
