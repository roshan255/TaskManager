const express = require("express");
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

router.patch("/:id", updateTask);

module.exports = router;
