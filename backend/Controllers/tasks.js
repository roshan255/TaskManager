const Task = require("../models/Task");
var listOfTask = require("../data");
var taskList = [];

const getTasks = async (req, res) => {
  //temp
  //res.status(200).json({ sucess: true, tasks: listOfTask });
  try {
    const tasks = await Task.find({});
    taskList = tasks.map((task) => {
      return task.task;
    });
    res.status(200).json({ sucess: true, tasks: taskList });
    console.log(taskList);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getTask = (req, res) => {
  //res.status(200).json({ sucess: true, task: listOfTask[req.params.id] });
  try {
    const task = Task.find({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
    console.log(error.message);
  }
};

const createTask = async (req, res) => {
  //temp
  taskList.push(req.body.task);
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

const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  console.log(req.url, req.params);
  if (id >= listOfTask.length)
    return res
      .status(404)
      .json({ success: false, message: `Item not found for id:${id}` });
  var deletingTask = listOfTask[id];
  listOfTask = listOfTask.filter((value, index) => index != id);
  res
    .status(200)
    .json({ success: true, message: `'${deletingTask}' is deleted` });
};

module.exports = { getTasks, getTask, updateTask, createTask, deleteTask };
