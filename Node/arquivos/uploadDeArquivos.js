const fs = require('fs')
const { Module } = require('module')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => 
{

    const tiposValidos = ['jpg', 'png','jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1))
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

    if(tipoEhValido === -1){
        console.log('Erro! Tipo inválido')
    }else{
        fs.createReadStream(caminho)
       .pipe(fs.createWhiteStream(novoCaminho))
       .on('finish', () => callbackImagemCriada(novoCaminho))
    }
    
}


       