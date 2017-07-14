var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function (req, res, next) {
    //find all messages:
    Message.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({ //we use return here because we don't want to execute then the success case code (though we could have used instead 'else' with 201)
                   title: 'An error ocurred',
                   error: err  
                });
            }
        
        res.status(200).json({
               message: 'Success!',
               obj: messages
           });
    });

});

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
           });
       });
});

router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        message.content = req.body.content;
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated message',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        message.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;
