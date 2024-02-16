const todoSchema = require("../models/todoSchema");

const deleteTodoController = async function (req, res) {
  const { id } = req.params;

  if (!id) return res.json({ error: "Invalid Id" });

  /*   console.log(await todoSchema.find({ _id: id })); */

  await todoSchema.deleteOne({ _id: id });
};

module.exports = deleteTodoController;
