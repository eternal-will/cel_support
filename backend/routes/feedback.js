const router = require("express").Router();

const { createFeedback } = require("../controllers/feedback");

router.post("/create-feedback", createFeedback);

module.exports = router;
