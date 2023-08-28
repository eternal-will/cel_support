const Comment = require("../models/comment.model");
const User = require("../models/user.model");
const Complaint = require("../models/complaint.model");

exports.createComment = async (req, res) => {
  try {
    const { userId, complaintId, comment } = req.body;

    const user = await User.findById(userId);
    if (!user) throw new Error("No user found with given id!");

    const complaint = await Complaint.findById(complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    const newComment = new Comment({
      userId,
      complaintId,
      comment,
    });

    await newComment.save();

    res.json({ status: "ok", message: "Comment added successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { complaintId } = req.body;

    const complaint = await Complaint.findById(complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    const comments = await Comment.find({ complaintId }).populate("userId");

    res.json({ status: "ok", comments });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { commentId, userId } = req.body;

    const comment = await Comment.findById(commentId);
    if (!comment) throw new Error("No comment found with given id!");

    if (comment.userId.toString() !== userId)
      throw new Error("You are not authorized to delete this comment!");

    comment.isDeleted = true;
    await comment.save();

    res.json({ status: "ok", message: "Comment deleted successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};
