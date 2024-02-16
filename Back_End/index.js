const express = require("express");
const cors = require("cors");
const connection = require("./config/dbConnection");
const router = require("./route");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

connection();

app.use(router);

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});
