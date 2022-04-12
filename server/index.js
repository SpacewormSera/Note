require("dotenv").config();
const express = require("express");
const cors = require("cors");

const router = require('./routes/index');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router)

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;
// lsta
