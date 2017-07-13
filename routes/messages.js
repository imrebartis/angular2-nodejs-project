var express = require('express');
var router = express.Router();

var Message = require('../models/message');

//we use post here since we want to store messages on the server
router.post('/', function (req, res, next) { //the path here has invisibly 'message' before the backslash
       var message = new Message({
           content: req.body.content
       });
       message.save(function(err, result){
           if(err) {
               return res.status(500).json({ //we use return here because we don't want to execute then the success case code (though we could have used instead 'else' with 201)
                   title: 'An error ocurred',
                   error: err
               });
           }
           res.status(201).json({
               message: 'Message saved!',
               obj: result
           })
       })
});

module.exports = router;
