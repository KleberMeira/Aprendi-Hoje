// ligar com cliente 
const { Client } = require('pg');

//importar dados para conexão
const db = require ('@model/Conexao');
const { resolve } = require('path');

//criar novo cliente com os dados
const client = new Client(db)

//conectar ao banco
client.connect();

const validar = usuario => {
    const sql = `SELECT * FROM usuario WHERE cpf='${usuario.cpf}' AND senha='${usuario.senha}'`;

    return new Promise(sql, (err, res) => {
        console.log(res.row);
        resolve(res.row[0]);
    });

};



