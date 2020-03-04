const Cardapio = require('../model/Cardapio')

let cardapioController = {
    //para cada coisa que fazemos na rota teremos uma função
    listarCardapio: (req, res) => {
        let listarCardapio = Cardapio.listarCardapio()
        res.send(listarCardapio)
    }

}

module.exports = cardapioController