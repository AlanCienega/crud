const express = require('express');
const router = express.Router();

const customerController = require ('../controllers/customerController');// requiero de un nivel arriba
																		//el archivo customerController


//aqui las url que la aplicacion va a usar
router.get('/',customerController.list);	//cuando te pidan por get la ruta inicial, ejecuta el parametro
router.post('/add',customerController.save);//cuando te pidan por post /add ejecuta tu parametro
router.get('/delete/:id',customerController.delete);
router.get('/update/:id',customerController.edit);
router.post('/update/:id',customerController.update);
module.exports = router;
