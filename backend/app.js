const express = require("express");
const tasks = require("./Routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", " DELETE");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use("/api/v1/tasks", logger, tasks);

app.get("/", (req, res) => {
  res.send("<h2>Server is running..<h2>");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(() => {
      console.log("connected to the DB....!!!");
    });
    app.listen(PORT, () =>
      console.log(`server is listening on port ${PORT}!!`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
