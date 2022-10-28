const express = require("express");
const routes = require("./routes/anton");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const url =
  "mongodb+srv://anton:anton@cluster0.wqwni3u.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, (err, db) => {
  console.log("conneted to mongo");
});

app.use("", routes.getRoute);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
