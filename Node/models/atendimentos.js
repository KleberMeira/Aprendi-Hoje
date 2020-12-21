
const moment = require('moment')

const conexao = require('../infraestrutura/conexao')

class Atendimento {

    adiciona(atendimento, res){
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = new {...atendimento, dataCriacao, data}
        
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior igual a data atual'
            },

            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres',
            },
        ]

        const erros = validacoes.filter(campo => !campo.valido )
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }else{
            const sql = 'INSERT INTO Atendimento SET ? '

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro){
                res,status(400).json(erro)
            }else{
                res.status(201).json(resultados)
            }
        })
        }
    }
}

module.exports = new Atendimentos