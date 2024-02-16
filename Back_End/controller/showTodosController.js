const todoSchema = require("../models/todoSchema");

const showTodosController = async function (req, res) {
  const todosList = await todoSchema.find({});

  res.json({
    status: "Success",
    data: todosList,
  });
};

module.exports = showTodosController;
