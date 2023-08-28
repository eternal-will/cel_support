const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserData",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    editedAt: {
      type: Date,
      default: Date.now(),
      required: false,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    collection: "complaint-data",
  }
);

module.exports = mongoose.model("ComplaintData", complaintSchema);
