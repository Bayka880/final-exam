const Task =  require("./task.module")

const creatTask= async (req) => {
    const tasks = new Task(req.body);
    return tasks.save();
  };

  const getAllTask = async (req) => {
    const data = await Task.find();
    return data;
  };

  module.exports = {creatTask, getAllTask}