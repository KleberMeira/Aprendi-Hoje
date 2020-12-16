

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce está na rota de atendimento'))

    app.post('/atendimentos', (req, res) => { 
        console.log(req.body)
        res.send('Voce esta na rota de atendimento fazendo um post')
        }) 
}