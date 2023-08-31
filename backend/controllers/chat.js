const Chat = require("../models/chat.model");
const User = require("../models/user.model");
const Complaint = require("../models/complaint.model");

exports.createChat = async (req, res) => {
  try {
    const { userId, complaintId, chat } = req.body;

    const user = await User.findById(userId);
    if (!user) throw new Error("No user found with given id!");

    const complaint = await Complaint.findById(complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    const newChat = new Chat({
      userId,
      complaintId,
      chat,
    });

    await newChat.save();

    res.json({ status: "ok", message: "Chat added successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.getChats = async (req, res) => {
  try {
    const { complaintId } = req.body;

    const complaint = await Complaint.findById(complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    const chats = await Chat.find({ complaintId }).populate("userId");

    res.json({ status: "ok", chats });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};
