// import express and mongoose DB

const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const MONGOD_URL =
  "mongodb+srv://gsaad:<georgess2>@cluster0.rmwv8.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const PORT = process.env.PORT || 3001;

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

app.listen(PORT, () => {
  console.log(`Connected on port ${PORT}`);
});
