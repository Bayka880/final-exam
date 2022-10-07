const express = require("express");
const router = express.Router();
const taskController = require("../modules/index")
router.post("/", taskController.create);
router.get("/", taskController.getAllTasks);
module.exports = router;