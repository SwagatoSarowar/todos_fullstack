const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  item: String,
});

module.exports = mongoose.model("todo", todoSchema);
