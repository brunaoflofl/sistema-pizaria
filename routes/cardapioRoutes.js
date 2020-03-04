const express = require('express')
const cardapioController = require('../controllers/cardapioControllers')
let routes = express.Router()

//routes.get('/cadastrar/:pizza/:preco', cardapioController.cadastrarPizza)
routes.get('/listar', cardapioController.listarCardapio )

module.exports = routes



//cadastrar item recebe dois parametros, nome e preco
//lista 