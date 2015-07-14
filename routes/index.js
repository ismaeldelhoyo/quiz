var express = require('express');
var router = express.Router();

var quizcontroller = require('../controllers/quiz_controller.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//Autoload de momandos con :quizId
router.param('quizId', quizcontroller.load);

//Definición de rutas de /quizes
router.get('/quizes', quizcontroller.index);
router.get('/quizes/:quizId(\\d+)', quizcontroller.show);
router.get('/quizes/:quizId(\\d+)/answer', quizcontroller.answer);

router.get('/author', function(req, res) {
	res.render('author');
});


module.exports = router;
