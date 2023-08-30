const express = require("express");
const app = express();
const cors = require("cors");

require("./db");

const userRouter = require("./routes/user");
const complaintRouter = require("./routes/complaint");
const chatRouter = require("./routes/chat");

app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/complaint", complaintRouter);
app.use("/api/chat", chatRouter);

app.listen(1377, () => {
  console.log("Server listening on port 1377");
});
