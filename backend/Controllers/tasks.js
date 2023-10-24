const Task = require("../models/Task");

const getTasks = async (req, res) => {
  try {
    const taskList = await Task.find({});
    res.status(200).json(
      taskList.map((task) => {
        return { id: task.id, task: task.task, completed: task.completed };
      })
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return res
        .status(404)
        .json({ message: `Task can not found on id: ${id}` });
    }
    res.status(200).json({ success: true, task: task });
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

const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask) {
      return res
        .status(404)
        .json({ message: `Task can not found on id: ${id}` });
    }
    res.status(201).json({ success: true, task: updatedTask });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: id });
    if (!deletedTask) {
      return res
        .status(404)
        .json({ message: `Task can not found on id: ${id}` });
    }
    res.status(200).json({ success: true, deletedTask });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error });
  }
};

module.exports = { getTasks, getTask, updateTask, createTask, deleteTask };
