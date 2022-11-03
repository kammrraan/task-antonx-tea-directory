const Anton = require("../models/Anton");
const validator = require("validator");

const findAnton = (req, res, next) => {
  const atn = req.params.atn;

  Anton.findOne({ atn })
    .exec()
    .then((data) => {
      console.log(data);
      if (data) {
        next();
      } else {
        return res.send("No Anton found with this atn");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const validation = (req, res, next) => {
  if (!req.body.name || validator.isEmpty(req.body.name)) {
    return res.json({ message: "name should not be empty" });
  }
  if (!validator.isEmail(req.body.email)) {
    return res.json({ message: "email is invalid" });
  }
  if (!validator.isDate(req.body.dob)) {
    return res.json({
      message: "date of birth should be in valid format YY/MM/DD",
    });
  }
  if (!validator.isNumeric(req.body.atn)) {
    return res.json({ message: "atn should be numeric" });
  }
  next();
};

module.exports = { findAnton, validation };
