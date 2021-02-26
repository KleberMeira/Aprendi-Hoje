

function verificaTokenJwt(token){
    await verificaTokenNaBlocklist(token);
    const { id } = jwt.verify(token, process.env.CHAVE_JWT);
    return id;
}



async function verificaTokenOpaco(token, allowlist, nome){
    if(!refreshToken){
        throw new InvalidArgumentError(`${nome} não enviado`);
    }
    const id = await allowlist.buscaValor(refreshToken);
    if(!id){
        throw new InvalidArgumentError(`${nome} inválido!`);
    }
    return id;
}

module.exports = {
    access: {
        lista: blocklistAccessToken,
        expiracao: [15, 'm'],
        cria(id){
            
        },
        verifica(token){
            return verificaTokenJwt(token, this.lista);
        }
    }
}