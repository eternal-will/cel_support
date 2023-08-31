const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://abcd:Shukla123@cluster0.c3vkiyy.mongodb.net/CELSupport?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
