const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://roshansuresh255:roshan1234@taskmanager.vk5hfq5.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to the db...."))
  .catch((err) => console.log(err));
