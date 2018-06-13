var express = require('express');
var router = express.Router();
var Comments = require('../models/Comments');

router.get('/', function(req, res, next) {
    Comments.getAllComments(function(err, rows) {
        if(err) {
            res.json(err);
        } else {
            res.render('comments', { result: rows });
        }
    });
});

router.post('/add', function(req, res, next){
    var params = [ req.body.writer, req.body.comment ];
    Comments.addComments(params, function(err, rows){
        if(err) {
            res.json(err);
        } else {
            res.send(rows);
        }
    });
});

module.exports = router;
