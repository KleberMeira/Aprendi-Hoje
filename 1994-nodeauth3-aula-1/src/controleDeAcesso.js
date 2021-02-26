const AccessControll = require('accesscontrol');
const controle = new AccessControll()

controle.grant('assinante').readAny('post',['id','titulo','conteudo','autor'])

module.exports = controle;