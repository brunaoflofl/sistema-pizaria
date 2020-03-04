const express = require('express')
let routes = express.Router()

routes.get('/:nome', (req, res) => {
    //let nomeDigitado = req.params.nome
    let {nome} = req.params
    res.send(`Seja bem vindo ${nome}`)
} )

module.exports = routes
