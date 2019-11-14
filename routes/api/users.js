const router = require("express").Router();
const passport = require('passport')
const userController = require("../../controller/userController")

router.route("api/users")
    // .get(userController.findAll)
    // .post(userController.create);
    .get(userController.findOne)

module.exports = router;