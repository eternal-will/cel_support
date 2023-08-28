const router = require("express").Router();

const {
  createComplaint,
  getComplaints,
  getComplaint,
  editComplaint,
  deleteComplaint,
} = require("../controllers/complaint");

router.post("/create-complaint", createComplaint);
router.post("/get-complaints", getComplaints);
router.post("/get-complaint", getComplaint);
router.post("/edit-complaint", editComplaint);
router.post("/delete-complaint", deleteComplaint);

module.exports = router;
