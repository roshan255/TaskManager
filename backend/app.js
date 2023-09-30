var listOfTask = require("./data");
const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", " DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

app.get("/", (req, res) => {
  res.send("<h2>Server is running..<h2>");
});

app.get("/api/v1/tasks", (req, res) => {
  res.status(200).json({ sucess: true, tasks: listOfTask });
});

app.post("/api/v1/tasks", (req, res) => {
  listOfTask.push(req.body.task);
  res.status(200).json({ success: true });
});

app.delete("/api/v1/tasks", (req, res) => {
  listOfTask.pop(Number(req.params.id));
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}!!`));
