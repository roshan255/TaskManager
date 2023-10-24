const Task = require("../models/Task");

const getTasks = async (req, res) => {
  try {
    const taskList = await Task.find({});
    res.status(200).json(
      taskList.map((task) => {
        return { task: task.task, completed: task.completed, id: task.id };
      })
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getTask = (req, res) => {
  try {
    const task = Task.find({ id: req.params.id });
    res.status(201).json({ success: true, task: task });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
    console.log(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    console.log(error);
  }
};

const updateTask = (req, res) => {
  res.send("updating task");
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTask = await Task.deleteOne({ _id: id });
    res.status(200).json({ success: true, deletedTask: deletedTask });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ success: false, message: error });
  }
};

module.exports = { getTasks, getTask, updateTask, createTask, deleteTask };
