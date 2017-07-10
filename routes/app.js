var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) { //this will render the node view
    res.render('node', { message: 'Halöchen'});
});

module.exports = router;
