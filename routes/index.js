var express = require('express');
var router = express.Router();
const model = require("../models/index");
const Sequelize = require('sequelize');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Quiz' });
});


router.get('/credits', function(req, res, next) {
    res.render('credits', { title:'Credito', autor: 'Sergio López López' });
});

router.get('/quizzes', function(req, res, next) {
    model.models.quiz.findAll().
    then( quizzes => {
        res.render('quizzes', {quizzes});
    }).catch(Sequelize.ValidationError, error => {
        })
        .catch(error => {
        });
});

module.exports = router;