const Feedback = require("../models/feedback.model");
const Complaint = require("../models/complaint.model");

exports.createFeedback = async (req, res) => {
  try {
    const complaint = await Complaint.findOne({ _id: req.body.complaintId });
    if (!complaint) throw new Error("No complaint found with given id!");

    const feedback = new Feedback({
      adminId: req.body.adminId,
      complaintId: req.body.complaintId,
      feedback: req.body.feedback,
    });

    complaint.status = "resolved";
    await complaint.save();

    await feedback.save();

    res.json({ status: "ok", message: "Feedback created successfully!" });
  } catch (error) {
    res.json({ status: "error", error: error.toString() });
  }
};
