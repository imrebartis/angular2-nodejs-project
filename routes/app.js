var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('node');
});

router.post('/', function (req, res, next) { //creating the user resource   
    var email = req.body.email;
    var user = new User({
        firstName: 'Jim',
        lastName: 'B',
        password: "s",
        email: email
    });
    user.save(); //saving the data into the users collection of our db
    res.redirect('/');
});

module.exports = router;
