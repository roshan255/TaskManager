const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getTasks = asyncWrapper(async (req, res) => {
  const taskList = await Task.find({});
  res.status(200).json(
    taskList.map((task) => {
      return { id: task.id, task: task.task, completed: task.completed };
    })
  );
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return res.status(404).json({ message: `Task can not found on id: ${id}` });
  }
  res.status(200).json({ success: true, task: task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const updatedTask = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) {
    return res.status(404).json({ message: `Task can not found on id: ${id}` });
  }
  res.status(201).json({ success: true, task: updatedTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const deletedTask = await Task.findOneAndDelete({ _id: id });
  if (!deletedTask) {
    return res.status(404).json({ message: `Task can not found on id: ${id}` });
  }
  res.status(200).json({ success: true, deletedTask });
});

module.exports = { getTasks, getTask, updateTask, createTask, deleteTask };
