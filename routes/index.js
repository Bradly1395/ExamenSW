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

router.get('/suma',
              function(req,res,next){
                console.log(req.params);
                res.render('suma', {});
              }
);

var almecenaNumeros = [];

var numeros_a_sumar = {
  n1:"",
  n2:"",
  suma:null
};

router.post('/suma', function(req,res,next){
  console.log(req.body);
  var sumaNumeros = Object.assign({}, numeros_a_sumar);
  sumaNumeros.n1 = req.body.txtN1;
  sumaNumeros.n2 = req.body.txtN2;
  sumaNumeros.suma = parseInt(sumaNumeros.n1) + parseInt(sumaNumeros.n2);
  almecenaNumeros.push(sumaNumeros);
  console.log(almecenaNumeros);
  var datos = Object.assign({},req.body);
  datos.numeros = almecenaNumeros;
  res.render('suma', datos);
});
module.exports = router;
