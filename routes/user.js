const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    // const { username, password } = req.body
    const email = req.body.email;
    const password = req.body.password;
    const first = req.body.first;
    const last = req.body.last;
    const age = req.body.age;
    const weight = req.body.weight; 
    const height = req.body.height; 

    console.log(email, password)
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${email} already exists!`
            })
        }
        else {
            const newUser = new User({
                email: email,
                password: password,
                first: first,
                last:last,
                age: age,
                weight: weight,
                height: height,

            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

router.get('/user', function(req,res){
    console.log("user check!!!" + req);
})

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    if (req.user) {
        res.json({ user: req.user })
        console.log("****************")
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router