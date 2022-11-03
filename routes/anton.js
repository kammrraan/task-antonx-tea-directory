const express = require("express");
const router = express.Router();
const controllers = require("../controllers/anton");
const { validation, findAnton } = require("../middlewares/validation");

const getRoute = router.get("", controllers.get_all_antons);

const postRoute = router.post("", validation, controllers.post_anton);

//update remaining
const updateRoute = router.patch(
  "/:atn",
  findAnton,
  validation,
  controllers.update_anton
);

const deleteRoute = router.delete("/:atn", findAnton, controllers.delete_anton);

//find one by giving atn number
const getOneRoute = router.get("/:atn", controllers.get_anton_by_atn);

module.exports = { getRoute, updateRoute, deleteRoute, getOneRoute, postRoute };
