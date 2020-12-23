
const moment = require('moment')
const axios  = require('axios')
const conexao = require('../infraestrutura/database/conexao')
const repositorio = require('../repositorios/atendimento')

const conexao = require('../infraestrutura/database/conexao')
const { resolve } = require('path')
const { rejects } = require('assert')

class Atendimento {

    constructor(){


        this.dataEhValida = ({data, dataCriacao}) => moment(data).isSameOrAfter(dataCriacao)

        this.clienteEhValido = (tamanho) => tamanho >= 5

        this.valida = parametros => this.validacoes.filter(campo 
            => {
                const { nome } = campo
                const parametro = parametros[nome]//procura dentro dos parametros qual parametro a chave que foi passada ou seja o nome
                //os dois nomes tem que bater 

                return !campo.valido(parametro)
        })

        this.validacoes = [
            {
                nome: 'data',
                valido: this.dataEhValida,
                mensagem: 'Data deve ser maior igual a data atual'
            },

            {
                nome: 'cliente',
                valido: this.clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres',
            },
        ]

    }
    adiciona(atendimento){
        
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        //const atendimentoDatado = new {...atendimento, dataCriacao, data}
        
        const parametros = {
            data: {data, dataCriacao},
            cliente: {tamanho: atendimento.cliente.length}
        }

        const erros = this.valida(parametros)
        const existemErros = erros.length

        if(existemErros){
            return new Promise((resolve, reject) => reject =>(erros) ) 
        }else{
            return repositorio.adiciona(atendimentoDatado)
                .then(resultados => {
                    const id = resultados.insertId
                    return { ...atendimento, id}
                })
        }
    }

    lista(){
        return repositorio.lista()
    }

    buscarPorId(id, res){
        const sql = `SELECTE * FROM Atendimentos WHERE id=${id}`
        conexao.query(sql, async(erro, resultados) =>{

            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            if(erro){
                res.status(400).json(erro)
            }else{
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)

                atendimento.cliente = data

                res.status(200).json(atendimento)
            }
        })
    }

    alterar(id, valores, res){

        if(valores.data){
            valores.data =  moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id})
            }
        })

    }

    deleta(id, res){

        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id})
            }
        })

    }
}



module.exports = new Atendimentos