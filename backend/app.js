const express = require("express");
const tasks = require("./Routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const app = express();
const PORT = 5000;
const notFound = require("./middleware/not-found");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/error-handler");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", " DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

app.use("/api/v1/tasks", logger, tasks);

app.get("/", (req, res) => {
  res.send("<h2>Server is running..<h2>");
});

app.use(notFound);

app.use(errorHandler);

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
