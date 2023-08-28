const Complaint = require("../models/complaint.model");
const User = require("../models/user.model");

exports.createComplaint = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) throw new Error("No user found with given id!");

    const complaint = new Complaint({
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
    });

    await complaint.save();

    res.json({ status: "ok", message: "Complaint created successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.getComplaints = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) throw new Error("No user found with given id!");

    const complaints = await Complaint.find({ userId: req.body.userId });
    res.json({ status: "ok", complaints });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.getComplaint = async (req, res) => {
  try {
    const user = User.findById(req.body.userId);
    if (!user) throw new Error("No user found with given id!");

    const complaint = getComplaintById(req.body.complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    res.json({ status: "ok", complaint });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.editComplaint = async (req, res) => {
  try {
    const complaint = getComplaintById(req.body.complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    complaint.title = req.body.title;
    complaint.description = req.body.description;
    complaint.editedAt = Date.now();

    await complaint.save();

    res.json({ status: "ok", message: "Complaint edited successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = getComplaintById(req.body.complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    await complaint.remove();

    res.json({ status: "ok", message: "Complaint deleted successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};