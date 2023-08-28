const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/cel_support_db1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
