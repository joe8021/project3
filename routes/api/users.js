const router = require("express").Router();
const userController = require("../../controller/userController")

router.route("/users")
    .get(userController.findAll)
    // .post(userController.create);

module.exports = router;