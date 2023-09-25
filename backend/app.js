const listOfTask = require("./data");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

app.get("/", (req, res) => {
  res.send("<h2>Server is running<h2>");
});

app.get("/api/tasks", (req, res) => {
  console.log(listOfTask);
  res.status(200).json({ sucess: true, tasks: listOfTask });
});

app.listen(5000, () => console.log("server is listening on port 5000!!"));
