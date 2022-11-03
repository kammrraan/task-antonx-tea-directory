const mongoose = require("mongoose");

const antonSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    //match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,   //validation added in middlewares
  },
  dob: {
    type: String,
    required: true,
    //match: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,      //validation added in middlewares
  },
  atn: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Anton", antonSchema);
