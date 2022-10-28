const Anton = require("../models/Anton");

module.exports = (req, res, next) => {
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
