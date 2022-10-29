const express = require("express");
const routes = require("./routes/anton");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3344;

// const url =
//   "mongodb+srv://anton:anton@cluster0.wqwni3u.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  "mongodb://localhost:27017/antonx-tea-serectory",
  (err, db) => {
    console.log("conneted to mongo");
  }
);

app.use("", routes.getRoute);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
