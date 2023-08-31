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

exports.getAllComplaints = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user.isAdmin) throw new Error("You are not authorised!");

    const complaints = await Complaint.find();
    res.json({ status: "ok", complaints });
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
    const user = await User.findById(req.body.userId);
    if (!user) throw new Error("No user found with given id!");

    const complaint = await Complaint.findById(req.body.complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");

    res.json({ status: "ok", complaint });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.openComplaint = async (req, res) => {
  try {
    const { complaintId, adminId } = req.body;

    const complaint = await Complaint.findById(complaintId);
    if (!complaint) throw new Error("No complaint found with given id!");
    console.log(complaint.title);

    complaint.status = "open";
    complaint.adminId = adminId;
    await complaint.save();

    res.json({
      status: "ok",
      message: "Complaint opened successfully!",
      complaint,
    });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.body.Id);
    if (!complaint) throw new Error("No complaint found with given id!");

    await Complaint.findByIdAndDelete(req.body.Id);

    res.json({ status: "ok", message: "Complaint deleted successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};

exports.resolveComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.body.Id);
    if (!complaint) throw new Error("No complaint found with given id!");

    complaint.status = "resolved";
    complaint.resolvedAt = Date.now();
    await complaint.save();

    res.json({ status: "ok", message: "Complaint marked as resolved!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};
