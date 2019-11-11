const router = require("express").Router();
const exController = require("../../controller/exController");

// Matches with "/api/books"
router.route("/exercises")
  .get(exController.findAll)
  .post(exController.create);

  module.exports = router