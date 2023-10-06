const express = require("express");
const tasks = require("./Routes/tasks");
const app = express();
const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", " DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

app.use("/api/v1/tasks", tasks);

app.get("/", (req, res) => {
  res.send("<h2>Server is running..<h2>");
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}!!`));
