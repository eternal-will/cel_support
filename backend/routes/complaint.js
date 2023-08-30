const router = require("express").Router();

const {
  createComplaint,
  getComplaints,
  getComplaint,
  editComplaint,
  deleteComplaint,
  resolveComplaint,
} = require("../controllers/complaint");

router.post("/create-complaint", createComplaint);
router.post("/get-complaints", getComplaints);
router.post("/get-complaint", getComplaint);
router.post("/edit-complaint", editComplaint);
router.post("/delete-complaint", deleteComplaint);
router.post("/resolve-complaint", resolveComplaint);

module.exports = router;
