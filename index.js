const express = require('express')
let app = express()//cria o servidor---normalmente nao fazemos rotas no mesmo local onde criamos o servidor

app.get('/', (req, res) => {
    res.send("Sistema pizzaria com express")
})
app.get('/cardapio', (req, res) => {
    res.send("Você está vendo o cardápio da pizzaria!")
})
app.get('/usuarios/:nome', (req, res) => {
    //let nomeDigitado = req.params.nome
    let {nome} = req.params
    res.send(`Seja bem vindo ${nome}`)
} )



app.listen(3000, ()=>console.log('Servidor em execução!'))//função anonima de call back

