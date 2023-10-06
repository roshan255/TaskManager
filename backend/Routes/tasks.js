const express = require("express");
var listOfTask = require("../data");
const {
  getTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../Controllers/tasks");
const router = express.Router();

router.get("/", getTasks);

router.get("/:id", getTask);

router.post("/", createTask);

router.delete("/:id", deleteTask);

module.exports = router;
