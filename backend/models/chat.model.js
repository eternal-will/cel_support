const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserData",
      required: true,
    },
    complaintId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ComplaintData",
      required: true,
    },
    chat: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "chat-data",
  }
);

module.exports = mongoose.model("ChatData", chatSchema);
