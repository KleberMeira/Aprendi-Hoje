
const controle = require('../usuarios/controleDeAcesso')

const metodos = {
    ler: {
        todos: 'readAny',
        apenasSeu: 'readOwn'
    },
    criar: {
        todos: 'crateAny',
        apenasSeu: 'createOwn'
    },
    remover: {
        todos: 'deleteAny',
        apenasSeu: 'deleteOwn'
    }
}
module.exports = (entidade, acao) => (requisicao, resposta, proximo) => {

    const permissoesDoCargo = controle.can(requisicao.user.cargo)
    const acoes = metodos[acao]
    const permissaoTodos = permissoesDoCargo[acoes.todos](entidade)
    const permissaoApenasSeu = permissoesDoCargo[acoes.apenasSeu](entidade)
    const permissao = permissoesDoCargo[acao](entidade)

    if (permissao.granted === false && permissaoApenasSeu === false) {
        resposta.status(403)
        resposta.end()
        return
    }

    requisicao.acesso = {
        todos: {
            permitido: permissaoTodos.grated,
            atributos: permissaoTodos.attributes

        },
        apenasSeu: {
            permitido: permissaoApenasSeu.granted,
            atributos: permissaoApenasSeu.atributes
        },
        
    }

    proximo()
}