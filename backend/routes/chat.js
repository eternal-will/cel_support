const router = require("express").Router();

const { createChat, getChats, deleteChat } = require("../controllers/chat");

router.post("/create-chat", createChat);
router.post("/get-chats", getChats);
router.post("/delete-chat", deleteChat);

module.exports = router;
