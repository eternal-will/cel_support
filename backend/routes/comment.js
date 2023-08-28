const router = require("express").Router();

const {
  createComment,
  getComments,
  deleteComment,
} = require("../controllers/comment");

router.post("/create-comment", createComment);
router.post("/get-comments", getComments);
router.post("/delete-comment", deleteComment);

module.exports = router;
