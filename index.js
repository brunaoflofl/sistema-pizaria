const express = require('express')
let rotasUsuarios = require('./routes/usuarioRoutes')
let rotasCardapio = require('./routes/cardapioRoutes')
let app = express()//cria o servidor---normalmente nao fazemos rotas no mesmo local onde criamos o servidor

app.get('/', (req, res) => {
    res.send("Sistema pizzaria com express")
})

app.use('/usuarios', rotasUsuarios)
app.use('/cardapio', rotasCardapio)

app.listen(3000, ()=>console.log('Servidor em execução!'))//função anonima de call back

