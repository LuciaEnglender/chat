require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection ERROR:" + err);
});
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

require("./models/User");
require("./models/Chatroom");
require("./models/Messages");

const app = require("./app");

app.listen(3000, () => {
  console.log("server running on port 3000");
});
