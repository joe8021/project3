const router = require("express").Router();
const passport = require('passport')
const userController = require("../../controller/userController")

// /api/api/users
router.route("/users")
    // .get(userController.findAll)
    // .post(userController.create);
    .get(userController.findOne)


router.route("/saveExercises/:userid")
    .post(userController.saveExercise)
    
module.exports = router;