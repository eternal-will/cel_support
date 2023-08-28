const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserData",
      required: true,
    },
    complaintId: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: "feedback-data",
  }
);

module.exports = mongoose.model("FeedbackData", feedbackSchema);
