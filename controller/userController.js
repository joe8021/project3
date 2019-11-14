const db = require("../models");
console.log(db);


module.exports = {
    // findAll: function(req,res){
    //     db.Users
    //         .find(req.query)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findOne: function(req,res){
        console.log("hit");
        db.User
            .findOne(req.session.passport.user)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    
}
console.log("hit again");
