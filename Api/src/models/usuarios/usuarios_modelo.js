
const bcrypt = require('bcrypt')

class Usuario{


    constructor(usuario){
        this.id   = usuario.id
        this.nome = usuario.nome
        this.email= usuario.email
        this.senhaHash= usuario.senhaHash

        this.valida()
    }

    static gerarSenhaHash(senha){
        const custoHash = 12
        return bcrypt.hash(senha, custoHash)
    }

    async adicionaSenha(senha){
        this.senhaHash = await Usuario.gerarSenhaHash(senha)
    }

}

module.exports = Usuario