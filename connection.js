const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/fitness_users';

//var db = db.db("fitness_users");
var db = require("./models/user");
console.log(db.find({}, {
    "users": 1
}));
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        console.log('Connected to Mongo');
    },
    err => {
        console.log('error connecting to Mongo: ')
        console.log(err);
    }
)

module.exports = mongoose.connection