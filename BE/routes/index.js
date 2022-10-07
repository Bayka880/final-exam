const express = require("express");
const router = express.Router();
const taskRouter = require("./task.routes");

router.use("/todo", taskRouter);

module.exports = router;