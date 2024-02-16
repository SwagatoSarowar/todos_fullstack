const todoSchema = require("../models/todoSchema");

const createTodoController = function (req, res) {
  const { item } = req.body;

  if (!item) return res.json({ error: "Item is required" });

  const newTodo = new todoSchema({
    item,
  });

  newTodo.save();
  res.status(201).send(newTodo);
};

module.exports = createTodoController;
