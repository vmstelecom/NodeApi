const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController.js');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);

module.exports = router;