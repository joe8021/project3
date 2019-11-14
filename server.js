const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose');
const session = require('express-session')
const dbConnection = require('./connection')
const MongoStore = require('connect-mongo')(session)
const db = require("./models")
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");
// Route requires
const user = require('./routes/user')
const ex = require("./routes/api/exercise")
const users = require("./routes/api/users")

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

//Mongoose DB Connection
mongoose.Promise = global.Promise




// Sessions
app.use(
    session({
        secret: 'special-harkening', //pick a random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false, //required
        saveUninitialized: false //required
    })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// app.use(express.static(path.join(__dirname, "client", "build")))
// // Routes
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// Routes
app.use('/user', user)
app.use('/api', ex)
app.use('/api', users)

// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
