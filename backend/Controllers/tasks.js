var listOfTask = require("../data");

const getTasks = (req, res) => {
  console.log(req.url);
  res.status(200).json({ sucess: true, tasks: listOfTask });
};

const getTask = (req, res) => {
  console.log(req.url);
  res.status(200).json({ sucess: true, task: listOfTask[req.params.id] });
};

const createTask = (req, res) => {
  listOfTask.push(req.body.task);
  res.status(200).json({ success: true });
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
