var express = require('express');
var router = express.Router();

var quizcontroller = require('../controllers/quiz_controller.js');
var commentController = require('../controllers/comment_controller.js');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors:[]});
});

//Autoload de momandos con :quizId
router.param('quizId', quizcontroller.load);

//Definición de rutas de sesion
router.get('/login', sessionController.new);
router.post('/login', sessionController.create);
router.get('/logout', sessionController.destroy);

//Definición de rutas de /quizes
router.get('/quizes', quizcontroller.index);
router.get('/quizes/:quizId(\\d+)', quizcontroller.show);
router.get('/quizes/:quizId(\\d+)/answer', quizcontroller.answer);
router.get('/quizes/new',sessionController.loginRequired, quizcontroller.new);
router.post('/quizes/create',sessionController.loginRequired, quizcontroller.create);
router.get('/quizes/:quizId(\\d+)/edit', sessionController.loginRequired, quizcontroller.edit);
router.put('/quizes/:quizId(\\d+)', sessionController.loginRequired, quizcontroller.update);
router.delete('/quizes/:quizId(\\d+)', sessionController.loginRequired, quizcontroller.destroy);

router.get('/author', function(req, res) {
	res.render('author');
});

router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);


module.exports = router;
