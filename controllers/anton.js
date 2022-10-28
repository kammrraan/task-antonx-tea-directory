const { default: mongoose } = require("mongoose");
const Anton = require("../models/Anton");

const get_all_antons = (req, res) => {
  Anton.find()
    .then((data) => {
      res.send({
        data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const get_anton_by_atn = (req, res) => {
  const atn = req.params.atn;
  Anton.findOne({ atn })
    .then((data) => {
      res.send({
        anton: data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const post_anton = (req, res) => {
  const anton = new Anton({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    atn: req.body.atn,
  });
  anton
    .save()
    .then((user) => {
      res.json({
        message: "New anton stored",
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

const delete_anton = (req, res) => {
  const atn = req.params.atn;

  Anton.deleteOne({ atn })
    .then((result) => {
      console.log(result);
      res.send({
        message: "deleted",
        deletedAnton: result,
      });
    })

    .catch((err) => {
      res.send(err);
    });
};

const update_anton = (req, res) => {
  Anton.updateOne(
    { atn: req.body.atn },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        atn: req.body.atn,
      },
    },
    { new: true }
  )
    .then((result) => {
      console.log(result);
      res.send({
        message: "Updated",
        UpdatedAnton: result,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = {
  get_all_antons,
  post_anton,
  delete_anton,
  get_anton_by_atn,
  update_anton,
};
