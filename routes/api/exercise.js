const router = require("express").Router();
const exController = require("../../controller/exController");

// Matches with "/api/books"
router.route("/exercises")
  .get(exController.findAll)


  module.exports = router