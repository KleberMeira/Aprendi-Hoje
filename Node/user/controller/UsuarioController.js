const usuario_table = require('@model/UsuarioTable');

const logar = async (req, res) => {
    
    const usuario = await usuario_table.validar({cpf: req.body.cpf, senha: req.body.senha});

    if(usuario !== undefined){
        res.render('index', { usuario: usuario});
    }else {
        res.render('status_eleitor', { title: 'Informações do eleitor', eleitor: eleitor});
    }

    return ;

}

module.exports = { logar };