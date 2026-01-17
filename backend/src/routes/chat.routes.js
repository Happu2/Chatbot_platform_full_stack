const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  chatWithAgent,
  getChatHistory
} = require("../controllers/chat.controller");

router.post("/", auth, chatWithAgent);
router.get("/:projectId", auth, getChatHistory);

module.exports = router;
