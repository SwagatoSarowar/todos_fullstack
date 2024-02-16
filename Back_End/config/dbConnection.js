const mongoose = require("mongoose");

const connection = function () {
  mongoose
    .connect(
      "mongodb+srv://swagatomern2303:CUFzFoayVCYSdNYL@cluster0.xweny3e.mongodb.net/todo_list?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected..."));
};

module.exports = connection;
