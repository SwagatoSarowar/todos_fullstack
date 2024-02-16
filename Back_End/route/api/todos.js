const showTodosController = require("../../controller/showTodosController");
const createTodoController = require("../../controller/createTodoController");
const deleteTodoController = require("../../controller/deleteTodoController");

const express = require("express");
const router = express.Router();

router.get("/todoslist", showTodosController);
router.post("/createtodo", createTodoController);
router.delete("/deletetodo/:id", deleteTodoController);

router.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

module.exports = router;
