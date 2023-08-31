const router = require("express").Router();

const { createChat, getChats } = require("../controllers/chat");

router.post("/create-chat", createChat);
router.post("/get-chats", getChats);

module.exports = router;
