var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var Estudiante = {
  nombre:"Bradly Josue Aguilera Inestroza",
  cuenta:"1501199502119",
  correo:"bradly_aguilera@yahoo.com"
}

router.get('/1501199502119',
              function(req,res,next){
                console.log(req.params);
                res.json(Estudiante);
              }
);

module.exports = router;
