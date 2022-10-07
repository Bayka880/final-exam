const taskService  = require("./task.servise")

const create = async (req, res) => {
    try {
      const book = await taskService.creatTask(req);
      res.json({
        data: book,
      });
    } catch (error) {
      res.json({
        error: error,
      });
    }
  };
  const getAllTasks = async (req, res) => {
    try {
      const books = await taskService.getAllTask(req);
      res.json({
        success: true,
        data: books,
      });
    } catch (err) {
      res.json({ success: false, data: err });
    }
  };
  module.exports = {create, getAllTasks}